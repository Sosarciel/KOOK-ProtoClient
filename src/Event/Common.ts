import { JObject } from "@zwa73/utils";
import { UserObject } from "./ObjectInterface";
import { MessageEventData } from "./Message";
import { MessageType } from "../CommonInterface";

/**消息通道类型 */
export type EventChannelType = "GROUP" | "PERSON" | "BROADCAST";
export type EventBaseData<Ext,Type extends EventChannelType = EventChannelType> = {
    /**消息通道类型  
     * GROUP 为组播消息  
     * PERSON 为单播消息  
     * BROADCAST 为广播消息
     */
    channel_type: Type;
    /**1:文字消息  
     * 2:图片消息  
     * 3:视频消息  
     * 4:文件消息  
     * 8:音频消息  
     * 9:KMarkdown  
     * 10:card 消息  
     * 255:系统消息  
     * 其它的暂未开放
     */
    type:MessageType|255;
    /**发送目的  
     * 频道消息类时, 代表的是频道 channel_id  
     * 如果 channel_type 为 GROUP 组播且 type 为 255 系统消息时, 则代表服务器 guild_id
     */
    target_id:string;
    /**发送者id  
     * 1 代表系统
     **/
    author_id:string;
    /**消息内容  
     * 文件，图片，视频时，content 为 url
     */
    content:string;
    /**消息id */
    msg_id:string;
    /**消息发送时间的毫秒时间戳 */
    msg_timestamp:number;
    /**随机串
     * 与用户消息发送 api 中传的 nonce 保持一致
     */
    nonce:string;
    /**不同消息类型的扩展数据 */
    extra:Ext;
}

/**文字频道消息数据 */
export type TextChannelsEventData<T extends EventChannelType = EventChannelType> = EventBaseData<{
    /**1:文字消息  
     * 2:图片消息  
     * 3:视频消息  
     * 4:文件消息  
     * 8:音频消息  
     * 9:KMarkdown  
     * 10:card 消息  
     */
    type:MessageType;
    /**服务器 id */
    guild_id:string;
    /**频道名 */
    channel_name:string;
    /**提及到的用户 id 的列表 */
    mention:string[];
    /**是否 mention 所有用户 */
    mention_all:boolean;
    /**mention 用户角色的数组 */
    mention_roles:string[];
    /**是否 mention 在线用户 */
    mention_here:boolean;
    /**用户信息 */
    author:UserObject;
},T>;

/**系统消息数据 */
export type SystemMessageEventData = EventBaseData<{
    /**255:系统消息 */
    type:255;
    /**该事件关联的具体数据, 详见各系统消息事件示例 */
    body:JObject;
}>;

export type AnyEventData = MessageEventData;



