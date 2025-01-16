import { TextChannelsEventData } from "./Common";





export type PrivateMessageEventData = Omit<TextChannelsEventData,'channel_type'>&{
    channel_type: 'PERSON';
}
export type PrivateMessageEvent = (data:PrivateMessageEventData)=>void;

export type GroupMessageEventData = Omit<TextChannelsEventData,'channel_type'>&{
    channel_type: 'GROUP';
}
export type GroupMessageEvent = (data:GroupMessageEventData)=>void;

export type BroadcastMessageEventData = Omit<TextChannelsEventData,'channel_type'>&{
    channel_type: 'BROADCAST';
}
export type BroadcastMessageEvent = (data:BroadcastMessageEventData)=>void;

export type MessageEvent = PrivateMessageEvent&GroupMessageEvent&BroadcastMessageEvent;
export type MessageEventData = PrivateMessageEventData|GroupMessageEventData|BroadcastMessageEventData;

const typea = {
    s: 0,
    d: {
      channel_type: 'PERSON',
      type: 9,
      target_id: '1756250903',
      author_id: '2326284695',
      content: 'hello',
      extra: {
        type: 9,
        code: '14894ce0dd6794fed3ef952e8641eef8',
        author: [Object],
        visible_only: '',
        mention: [],
        mention_all: false,
        mention_roles: [],
        mention_here: false,
        nav_channels: [],
        kmarkdown: [Object],
        emoji: [],
        preview_content: '',
        last_msg_content: 'hello',
        send_msg_device: 0
      },
      msg_id: 'a8b37087-e82c-402c-a720-f3a7538b578c',
      msg_timestamp: 1737028114513,
      nonce: 'QrstocdgMHP1I387diQXuP7z',
      from_type: 1
    },
    extra: {
      verifyToken: 'sOIgu4P9z7w77-GM',
      encryptKey: '',
      callbackUrl: '',
      intent: -1
    },
    sn: 7
  }