import fs from 'fs';
import FormData from 'form-data';
import { getAuthorization, KookBaseUrl } from '@/src/Define';
import { Endpoint } from '@/src/Endpoint';
import { RequestOption, SLogger, UtilHttp } from '@zwa73/utils';
import { UploadMediaRespData } from './RequestInterface';

export async function postFormData(filepath:string,token:string){

    const form = new FormData();
    form.append('file', fs.createReadStream(filepath));
    const opt:RequestOption = {
        protocol:'https:',
        hostname: KookBaseUrl,
        port: 443,
        path: Endpoint.UploadMedia,
        method: 'POST',
        headers:{
            Authorization: getAuthorization("Bot", token),
            ...form.getHeaders()
        }
    }
    const out = await UtilHttp.https().sendFormData().acceptJson().finalize(opt).once(form);
    if(out==undefined) return undefined;
    if(out.data=="") return undefined;
    try{
        const data = out.data as UploadMediaRespData;
        return {
            ...out,
            data
        }
    }catch{
        SLogger.warn("postFormData JSON.parse 错误",out);
        return undefined;
    }
}

