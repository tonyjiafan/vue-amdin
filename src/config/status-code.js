const statusCode = {
    '2': '接口调用失败',
    '50002': '未找到记录'
    //统一错误码返回 以服务名字开头，例如:USER_xxx,TENANT_XXX

    //tenant服务 100开头
    // TENANT_NAME_EXIST = 10001; //名称重复
    // TENANT_PHONE_EXIST = 10002; //号码重复
    // TENANT_MAIL_EXIST = 10003; //邮箱重复

    // //wallet服务 200开头
    // WALLET_REPEAT_ADD = 20001; //重复添加
    // WALLET_RECORD_NOTFOUND = 20002; //未找到记录
    // WALLET_AUDIT_NOPASS_NOPROCESS=20003;//审核未通过，不予以处理
    // WALLET_BALANCE_FREEZE_NOPROCESS=20004;//账户被冻结，不予以处理
    // WALLET_NOT_SUFFICIENT_FUNDS=20005;//余额不足

    // //user服务 300开头
    // USER_LOGIN_USER_OR_PASSWORD_ERROR = 30001;
    // USER_LOGIN_SMS_VERIFY_ERROR = 30002;
    // USER_LOGIN_CAPTCHA_ERROR = 30003;
    // USER_REGISTER_CAPTCHA_ERROR = 30004;
    // USER_REGISTER_SMS_VERIFY_ERROR = 30005;

    // //优惠服务 400开头
    // PREF_NAME_EXIST=40001;//优惠名称重复
    // PREF_POLICY_NAME_EXIST=40002;//优惠策略名称重复

    // //活动服务 500开头
    // ACTIVITY_DATE_INVALID=50001;//日期无效
    // ACTIVITY_RECORD_NOTFOUND=50002;//未找到记录
    // ACTIVITY_ADDRESS_REQUIRED=50003;//会议地址必填
    // ACTIVITY_STARTED_NOT_DELETE=50004;//会议进行中不可删除

    // //门票服务 600开头
    // TICKET_RECORD_NOTFOUND=60001;//未找到记录

}
export default statusCode