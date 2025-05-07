import { JObject, QueryRequestData, UtilHttp } from "@zwa73/utils";
import { postFormData } from "./Common";
import { getAuthorization, KookBaseUrl } from "../Define";
import { SendGroupMessageReqData, SendPrivateMessageReqData, SendPrivateMessageRespData, UploadMediaRespData } from "./RequestInterface";
import { Endpoint } from "../Endpoint";



export class KookAPISender{
    constructor(private token:string){}

    private async postapi(url:string,obj?:JObject){
        return UtilHttp.httpPostJson().finalize({
            hostname:KookBaseUrl,
            port:443,
            path:url,
            headers:{
                "Content-Type":"application/json",
                "Authorization":getAuthorization('Bot',this.token),
            }
        }).once(obj);
    }
    private async getapi(url:string,obj?:QueryRequestData){
        return UtilHttp.httpsGetJson().sendQuery().finalize({
            hostname:KookBaseUrl,
            path:url,
            port:443,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${this.token}`,
            }
        }).once(obj??{});
    }

    /**上传媒体文件 */
    async uploadMedia(filepath:string){
        const res = await postFormData(filepath,this.token);
        return res?.data as UploadMediaRespData|undefined;
    }

    /**发送私聊消息 */
    async sendPrivateMsg(data:SendPrivateMessageReqData){
        const res = await this.postapi(Endpoint.PrivateMessage.Create,data);
        return res?.data as SendPrivateMessageRespData|undefined;
    }

    /**发送频道消息 */
    async sendChannelMsg(data:SendGroupMessageReqData){
        const res = await this.postapi(Endpoint.GroupMessage.Create,data);
        return res?.data as SendPrivateMessageRespData|undefined;
    }

    /**获取自身数据 */
    async getSelfData(){
        const res = await this.getapi(Endpoint.User.Me);
        return res?.data as JObject|undefined;
    }
}