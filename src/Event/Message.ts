import { TextChannelsEventData } from "./Common";





export type PrivateMessageEventData = TextChannelsEventData&{
    channel_type: 'PERSON';
}
export type PrivateMessageEvent = (data:PrivateMessageEventData)=>void;

export type GroupMessageEventData = TextChannelsEventData&{
    channel_type: 'GROUP';
}
export type GroupMessageEvent = (data:GroupMessageEventData)=>void;

export type BroadcastMessageEventData = TextChannelsEventData&{
    channel_type: 'BROADCAST';
}

export type BroadcastMessageEvent = (data:BroadcastMessageEventData)=>void;

export type MessageEvent = PrivateMessageEvent&GroupMessageEvent&BroadcastMessageEvent;
export type MessageEventData = PrivateMessageEventData|GroupMessageEventData|BroadcastMessageEventData;

const PrivateMessage = {
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

const group = {
    s: 0,
    d: {
      channel_type: 'GROUP',
      type: 9,
      target_id: '9153364959456846',
      author_id: '2326284695',
      content: 'ss',
      extra: {
        type: 9,
        code: '',
        guild_id: '8391966259259887',
        guild_type: 0,
        channel_name: '文字频道',
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
        channel_type: 1,
        last_msg_content: 'dabyss zirawa_sevethri：ss',
        send_msg_device: 0
      },
      msg_id: '2c96a123-a847-4cb2-af6d-8d9606355651',
      msg_timestamp: 1737024925686,
      nonce: 'i5OSv7fYjB9BGMAOAzRxNW8m',
      from_type: 1
    },
    extra: {
      verifyToken: 'sOIgu4P9z7w77-GM',
      encryptKey: '',
      callbackUrl: '',
      intent: -1
    },
    sn: 2
  }