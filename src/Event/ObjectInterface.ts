/** 用户信息类型 */
export type UserObject = {
    /** 用户的 id */
    id: string;
    /** 用户的名称 */
    username: string;
    /** 用户在当前服务器的昵称 */
    nickname: string;
    /** 用户名的认证数字，用户名格式：user_name#identify_num */
    identify_num: string;
    /** 当前是否在线 */
    online: boolean;
    /** 是否为机器人 */
    bot: boolean;
    /** 用户的状态, 0 和 1 代表正常，10 代表被封禁 */
    status: 0|1|10;
    /** 用户的头像的 url 地址 */
    avatar: string;
    /** vip 用户的头像的 url 地址，可能为 gif 动图 */
    vip_avatar: string;
    /** 是否手机号已验证 */
    mobile_verified: boolean;
    /** 用户在当前服务器中的角色 id 组成的列表 */
    roles: string[];
};

/** 服务器类型 */
export type GuildObject = {
    /** 服务器 id */
    id: string;
    /** 服务器名称 */
    name: string;
    /** 服务器主题 */
    topic: string;
    /** 服务器主 id */
    user_id: string;
    /** 服务器 icon 地址 */
    icon: string;
    /** 通知类型: 0-默认, 1-所有通知, 2-仅@提及, 3-不接收通知 */
    notify_type: 0|1|2|3;
    /** 默认语音区域 */
    region: string;
    /** 是否为公开服务器 */
    enable_open: boolean;
    /** 公开服务器 id */
    open_id: string;
    /** 默认频道 id */
    default_channel_id: string;
    /** 欢迎频道 id */
    welcome_channel_id: string;
    /** 角色列表 */
    roles: RoleObject[];
    /** 频道列表 */
    channels: ChannelObject[];
};

/** 角色类型 */
export type RoleObject = {
    /** 角色 id */
    role_id: number;
    /** 角色名称 */
    name: string;
    /** 颜色色值 */
    color: number;
    /** 顺序位置 */
    position: number;
    /** 是否为角色设定(与普通成员分开显示) */
    hoist: number;
    /** 是否允许@提及此角色 */
    mentionable: number;
    /** 权限码 */
    permissions: number;
};

/** 频道类型 */
export type ChannelObject = {
    /** 频道 id */
    id: string;
    /** 频道名称 */
    name: string;
    /** 创建者 id */
    user_id: string;
    /** 服务器 id */
    guild_id: string;
    /** 频道简介 */
    topic: string;
    /** 是否为分组 */
    is_category: boolean;
    /** 上级分组 id (无则0或空字符串) */
    parent_id: string;
    /** 排序 level */
    level: number;
    /** 时间间隔慢速模式(秒) */
    slow_mode: number;
    /** 频道类型: 1-文字频道, 2-语音频道 */
    type: 1|2;
    /** 权限覆写规则列表 (针对角色) */
    permission_overwrites: any[];
    /** 权限覆写规则列表 (针对用户) */
    permission_users: any[];
    /** 权限同步设置: 1-同步, 0-不同步 */
    permission_sync: 0|1;
    /** 是否有密码 */
    has_password: boolean;
};


/** 引用消息类型 */
export type QuoteObject = {
    /** 引用消息 id */
    id: string;
    /** 引用消息类型 */
    type: number;
    /** 引用消息内容 */
    content: string;
    /** 引用消息创建时间 (毫秒) */
    create_at: number;
    /** 作者的用户信息 */
    author: UserObject;
};

/** 附加的多媒体数据类型 */
export type AttachmentsObject = {
    /** 多媒体类型 */
    type: string;
    /** 多媒体地址 */
    url: string;
    /** 多媒体名 */
    name: string;
    /** 大小 (单位 Byte) */
    size: number;
};