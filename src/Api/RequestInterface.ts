import { MessageType } from "../CommonInterface";


/**基础API的相应数据 */
type RespData<T> = {
    /**错误码, 0代表成功, 非0代表失败 */
    code: 0;
    /**操作info */
    message: string;
    /** */
    data:T;
};

/**上传媒体文件的响应数据 */
export type UploadMediaRespData = RespData<{
    /**上传文件的结果url */
    url:string;
}>;

/**发送私聊消息的请求数据 */
export type PrivateMessageReqData = {
    /**消息类型
     * 不传默认为 1  
     * 1:文字消息  
     * 2:图片消息  
     * 3:视频消息  
     * 4:文件消息  
     * 8:音频消息  
     * 9:KMarkdown  
     * 10:card 消息  
     */
    type: MessageType;
    /**目标用户 id, 后端会自动创建会话  
     * 有此参数之后可不传 chat_code参数
     */
    target_id:string;
    /**目标会话 Code
     * chat_code 与 target_id 必须传一个
     */
    chat_code:string;
    /**消息内容 */
    content:string;
    /**回复某条消息的 msgId */
    quote:string;
    /**nonce, 服务端不做处理, 原样返回 */
    nonce:string;
    /**模板消息id
     * 如果使用了, content会作为模板消息的input, 参见模板消息
     */
    template_id:string;
}
/**发送私聊消息的响应数据 */
export type PrivateMessageRespData = RespData<{
    /**服务端生成的消息 id */
    msg_id: string;
    /**消息发送时间(服务器时间戳) */
    msg_timestamp: number;
    /**随机字符串，见参数列表 */
    nonce: string;
}>
