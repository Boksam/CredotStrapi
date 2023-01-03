"use strict";
/**
 * A set of functions called "actions" for `email-valid`
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    emailValidCheck: async (ctx, next) => {
        try {
            const { email } = ctx.params;
            const users = await strapi.plugins["users-permissions"].services.user.fetchAll();
            const flag = users.find((user) => user.email === email) ? true : false;
            if (flag) {
                const resData = {
                    isDuplicate: true,
                    email,
                    message: "이미 존재하는 이메일입니다.",
                };
                console.log(ctx.body);
                return (ctx.body = resData);
            }
            else {
                const resData = {
                    isDuplicate: false,
                    email,
                    message: "사용 가능한 이메일입니다.",
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
