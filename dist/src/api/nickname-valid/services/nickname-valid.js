"use strict";
/**
 * nickname-valid service
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    nickNameValidCheck: async (nickName) => {
        try {
            const entries = await strapi.entityService.findOne("api::users.users", nickName, {
                fields: [],
                pouplate: "",
            });
            return entries;
        }
        catch (err) {
            return err;
        }
    },
});
