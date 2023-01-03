export default {
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
