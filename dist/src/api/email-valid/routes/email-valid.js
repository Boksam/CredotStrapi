"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/email-valid/:email",
            handler: "email-valid.emailValidCheck",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
