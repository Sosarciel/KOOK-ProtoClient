import fs from 'fs';
import FormData from 'form-data';
import https from 'https';
import { getAuthorization, KookBaseUrl } from '@/src/Define';
import { Endpoint } from '@/src/Endpoint';
import { SLogger } from '@zwa73/utils';
import { IncomingHttpHeaders } from 'http';
import { UploadMediaRespData } from './RequestInterface';

export function postFormData(filepath:string,token:string){
    type RespData = {
        /**响应头 */
        headers: IncomingHttpHeaders;
        /**响应状态码 */
        statusCode?: number;
        /**响应数据 */
        data: UploadMediaRespData;
    };
    return new Promise<RespData|undefined>((reslove)=>{
        const form = new FormData();
        form.append('file', fs.createReadStream(filepath));

        const options = {
            hostname: KookBaseUrl,
            port: 443,
            path: Endpoint.UploadMedia,
            method: 'POST',
            headers: {
                Authorization: getAuthorization("Bot", token),
                ...form.getHeaders()
            }
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const respdat:RespData={
                        headers: res.headers,
                        statusCode: res.statusCode,
                        data: json
                    };
                    reslove(respdat);
                } catch (error) {
                    SLogger.warn('JSON 解析错误:', error);
                    reslove(undefined);
                }
            });

        });

        req.on('error', (e) => {
            SLogger.warn('postFormData错误:', e);
            reslove(undefined);
        });

        form.pipe(req);
    });
}

