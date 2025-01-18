



/**获取授权头
 * @param type   - 机器人为 Bot OAuth为Bearer
 * @param token  - 机器人token或用户token
 */
export const getAuthorization = (type:'Bot'|'Bearer',token:string)=>`${type} ${token}`

export const KookBaseUrl = "www.kookapp.cn" as const;


