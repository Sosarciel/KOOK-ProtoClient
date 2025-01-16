import { AnyFunc, PRecord, SLogger, UtilFunc } from '@zwa73/utils';
import { WsConnectManager } from './WsConnectManager';
import { AnySignaling } from './Signaling';
import { EventName, EventMap } from '../Event/EventTable';
import { PrivateMessageEventData } from '../Event/Message';

/** 事件监听 */
export type ListenerEvent<E extends AnyFunc> = {
    /**权重 */
    weight:number;
    /**事件ID */
    id:string;
    /**事件函数 */
    event:E;
}

/**注册的事件表 */
type EventTable = {
    [P in keyof EventMap]?:PRecord<string,ListenerEvent<EventMap[P]>>
}

/**注册选项 */
type RegEventOpt = Partial<{
    /**事件权重 越高越先触发 */
    weight:number;
    /**事件id */
    id:string;
}>



/**websocket客户端 */
export class WebsocketClient {
    connectManager:WsConnectManager;
    constructor(private token: string) {
        const client = this;
        this.connectManager = new WsConnectManager(token, {
            onmessage: (data) => {
                void client.routeEvent(data);
            },
            onreset: () => { },
            onclose: () => { },
        });
    }
    start(){
        this.connectManager.start();
    }


    //#region 事件
    private _eventTable:EventTable = {};
    async routeEvent(data:AnySignaling){
        SLogger.verbose('routeEvent:',data);
        if(data.s != 0) return;
        const eventdata = data.d;
        switch(eventdata.channel_type){
            case "BROADCAST":{
                this.invokeEvent('BroadcastMessage',eventdata);
                break;
            }
            case "GROUP":{
                this.invokeEvent('GroupMessage',eventdata);
                break;
            }
            case "PERSON":{
                this.invokeEvent('PrivateMessage',eventdata);
                break;
            }
            default:{
                SLogger.warn(`WebsocketClient.routeEvent 错误 未知的channel_type:${(eventdata as any).channel_type}`);
                break;
            }
        }
    }
    /**调用事件  
     * @param eventType - 事件类型
     * @param arg1      - 事件函数的第一个参数 通常为事件数据
     * @param arg2      - 事件函数的第二个参数 通常为事件快速操作工具
     */
    invokeEvent<T extends EventName>(
        eventType:T,
        data:Parameters<EventMap[T]>[0]
    ){
        const emap = this._eventTable[eventType];
        if(emap===undefined) return;
        const elist:ListenerEvent<EventMap[T]>[] = Object.values(emap) as any;
        elist.filter(e=>e!==undefined)
            .sort((a,b)=>b.weight-a.weight)
            .forEach((v)=>(v.event as any)(data));
    }
    /**注册事件  
     * @param eventType - 事件类型
     * @param event     - 事件函数
     * @param opt       - 可选参数
     */
    registerEvent<T extends EventName>(eventType: T, event: EventMap[T], opt?:RegEventOpt) {
        this._eventTable[eventType] = this._eventTable[eventType]??{};
        const typeTable = this._eventTable[eventType]!;

        const id = opt?.id ?? UtilFunc.genUUID();
        const weight = opt?.weight ?? 0;

        typeTable[id] = {
            event,id,weight
        };
    }
    //#endregion
}

//const client = new WebsocketClient('1/MjYyOTg=/ONxsTfp41qeKE3bhcuPTlg==');
//client.connectGateway();



