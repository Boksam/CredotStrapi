export default {
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
