"use strict";
/**
 * A set of functions called "actions" for `nickname-valid`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    nickNameValidCheck: async (ctx, next) => {
        try {
            const { nickName } = ctx.params;
            const users = await strapi.plugins["users-permissions"].services.user.fetchAll();
            const flag = users.find((user) => user.nickName === nickName)
                ? true
                : false;
            if (flag) {
                const resData = {
                    isDuplicate: true,
                    nickName,
                    message: "이미 존재하는 닉네임입니다.",
                };
                console.log(ctx.body);
                return (ctx.body = resData);
            }
            else {
                const resData = {
                    isDuplicate: false,
                    nickName,
                    message: "사용 가능한 닉네임입니다.",
                };
                console.log(ctx.body);
                return (ctx.body = resData);
            }
        }
        catch (err) {
            ctx.body = err;
        }
    },
};
