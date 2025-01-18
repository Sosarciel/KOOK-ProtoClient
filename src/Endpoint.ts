



const formatBuilder =
    <PRE extends string>(pre:PRE)=>
        <PTH extends string>(pth:PTH)=>
            `${pre}/${pth}` as const;

export class EndpointBuilder<T extends 3> {
    constructor(private version:T){}
    buildEndpoint(){
        const f = <T extends string>(basepath:T)=>
            `/api/v${this.version}/${basepath}` as const;
        return {
            /**获取网关 */
            Gateway:f('gateway/index'),
            /**上传媒体文件 */
            UploadMedia:f('asset/create'),
            PrivateMessage:this.buildPrivateMessage(f('direct-message')),
            GroupMessage:this.buildGroupMessage(f('message')),
            User:this.buildUser(f('user')),
        }
    }

    private buildPrivateMessage<P extends string>(pre:P){
        const f = formatBuilder(pre);

        return {
            Create:f('create'),
        }
    }

    private buildGroupMessage<P extends string>(pre:P){
        const f = formatBuilder(pre);

        return {
            Create:f('create'),
        }
    }

    private buildUser<P extends string>(pre:P){
        const f = formatBuilder(pre);

        return {
            Me:f('me'),
        }
    }
}
export const Endpoint = new EndpointBuilder(3).buildEndpoint();