


export class EndpointBuilder<T extends 3> {
    constructor(private version:T){}
    buildEndpoint(){
        const format = <T extends string>(basepath:T)=>
            `/api/v${this.version}/${basepath}` as const;
        return {
            /**获取网关 */
            Gateway:format('gateway/index'),
            /**上传媒体文件 */
            UploadMedia:format('asset/create'),
            PrivateMessage:this.buildPrivateMessage('direct-message'),
            GroupMessage:this.buildGroupMessage('message'),
        }
    }

    private buildPrivateMessage<P extends string>(pre:P){
        const format = <T extends string>(p:T)=>
            `${pre}/${p}` as const;

        return {
            Create:format('create'),
        }
    }

    private buildGroupMessage<P extends string>(pre:P){
        const format = <T extends string>(p:T)=>
            `${pre}/${p}` as const;

        return {
            Create:format('create'),
        }
    }
}
export const Endpoint = new EndpointBuilder(3).buildEndpoint();