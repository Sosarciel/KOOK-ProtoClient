import { JObject, UtilCom } from "@zwa73/utils";
import { postFormData } from "./Common";
import { KookBaseUrl } from "../Define";
import { PrivateMessageReqData } from "./RequestInterface";
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
        return postFormData(filepath,this.token);
    }

    /**发送私聊消息 */
    async sendPrivateMsg(data:PrivateMessageReqData){
        return this.postapi(data,Endpoint.PrivateMessage.Create);
    }

}