"use strict";
/**
 * email-valid service
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    emailValidCheck: async (email) => {
        try {
            const entries = await strapi.entityService.findOne("api::users.users", email, {
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
