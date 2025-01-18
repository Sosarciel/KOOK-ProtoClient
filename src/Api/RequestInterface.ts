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
export type SendPrivateMessageReqData = {
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
    type?: MessageType;
    /**消息内容 */
    content?:string;
    /**回复某条消息的 msgId */
    quote?:string;
    /**nonce, 服务端不做处理, 原样返回 */
    nonce?:string;
    /**模板消息id
     * 如果使用了, content会作为模板消息的input, 参见模板消息
     */
    template_id?:string;
}&({
    /**目标用户 id, 后端会自动创建会话  
     * 有此参数之后可不传 chat_code 参数
     */
    target_id:string;
}|{
    /**目标会话 Code
     * chat_code 与 target_id 必须传一个
     */
    chat_code:string;
});
/**发送私聊消息的响应数据 */
export type SendPrivateMessageRespData = RespData<{
    /**服务端生成的消息 id */
    msg_id: string;
    /**消息发送时间(服务器时间戳) */
    msg_timestamp: number;
    /**随机字符串，见参数列表 */
    nonce: string;
}>;


/**发送频道消息的请求数据 */
export type SendGroupMessageReqData = {
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
    type?: MessageType;
    /** 目标频道 id */
    target_id: string;
    /** 消息内容 */
    content: string;
    /** 回复某条消息的 msgId */
    quote?: string;
    /** nonce, 服务端不做处理, 原样返回 */
    nonce?: string;
    /** 用户 id, 代表该消息是临时消息，不存数据库，只为该用户推送临时消息 */
    temp_target_id?: string;
    /** 模板消息 id, 使用时 content 作为模板消息的 input */
    template_id?: string;
};

/**发送频道消息的响应数据 */
export type SendGroupMessageRespData = RespData<{
    /** 服务端生成的消息 id */
    msg_id: string;
    /** 消息发送时间(服务器时间戳) */
    msg_timestamp: number;
    /** 随机字符串，见参数列表 */
    nonce: string;
}>;

/**获取自身信息的响应数据 */
export type GetSelfData = RespData<{
    /** 用户的 id */
    id: string;
    /** 用户的名称 */
    username: string;
    /** 用户名的认证数字，用户名格式: user_name#identify_num */
    identify_num: string;
    /** 当前是否在线 */
    online: boolean;
    /** 当前连接方式 */
    os: string;
    /** 用户的状态, 0 和 1 代表正常，10 代表被封禁 */
    status: number;
    /** 用户的头像的 url 地址 */
    avatar: string;
    /** vip 用户的头像的 url 地址 */
    vip_avatar: string;
    /** 用户的横幅的 url 地址 */
    banner: string;
    /** 用户的昵称 */
    nickname: string;
    /** 用户的角色信息 */
    roles: Map<string, any>;
    /** 用户是否为 vip */
    is_vip: boolean;
    /** 用户是否为年度 vip */
    vip_amp: boolean;
    /** 用户是否为机器人 */
    bot: boolean;
    /** 机器人状态 */
    bot_status: boolean;
    /** 用户标签信息 */
    tag_info: Map<string, any>;
    /** 是否手机号已验证 */
    mobile_verified: boolean;
    /** 是否为系统账号 */
    is_sys: boolean;
    /** 客户端 id */
    client_id: string;
    /** 是否验证过 */
    verified: boolean;
    /** 手机区号, 如中国为 86 */
    mobile_prefix: string;
    /** 用户手机号，带掩码 */
    mobile: string;
    /** 当前邀请注册的人数 */
    invited_count: number;
}>
