"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/nickname-valid/:nickName",
            handler: "nickname-valid.nickNameValidCheck",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
