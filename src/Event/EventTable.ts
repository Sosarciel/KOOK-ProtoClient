import { BroadcastMessageEvent, GroupMessageEvent, PrivateMessageEvent } from "./Message";

export type EventMap = {
    /** 私聊消息事件 */
    PrivateMessage     : PrivateMessageEvent;
    /** 频道消息事件 */
    GroupMessage       : GroupMessageEvent;
    /** 广播消息事件 */
    BroadcastMessage   : BroadcastMessageEvent;
}

export type EventName = keyof EventMap;
export type AnyEvent =  EventMap[EventName];