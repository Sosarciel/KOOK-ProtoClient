import { JObject, UtilCom } from "@zwa73/utils";
import { postFormData } from "./Common";
import { KookBaseUrl } from "../Define";
import { SendGroupMessageReqData, SendPrivateMessageReqData, SendPrivateMessageRespData, UploadMediaRespData } from "./RequestInterface";
import { Endpoint } from "../Endpoint";



export class KookAPISender{
    constructor(private token:string){}

    private async postapi(obj:JObject,url:string){
        return UtilCom.httpsPost(obj,{
            hostname:KookBaseUrl,
            path:url,
            port:443,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${this.token}`,
            }
        });
    }
    private async getapi(obj:Record<string,string|number|boolean>,url:string){
        return UtilCom.httpsGet(obj,{
            hostname:KookBaseUrl,
            path:url,
            port:443,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${this.token}`,
            }
        });
    }

    /**上传媒体文件 */
    async uploadMedia(filepath:string){
        const res = await postFormData(filepath,this.token);
        return res?.data as UploadMediaRespData|undefined;
    }

    /**发送私聊消息 */
    async sendPrivateMsg(data:SendPrivateMessageReqData){
        const res = await this.postapi(data,Endpoint.PrivateMessage.Create);
        return res?.data as SendPrivateMessageRespData|undefined;
    }
    /**发送频道消息 */
    async sendChannelMsg(data:SendGroupMessageReqData){
        const res = await this.postapi(data,Endpoint.GroupMessage.Create);
        return res?.data as SendPrivateMessageRespData|undefined;
    }
}