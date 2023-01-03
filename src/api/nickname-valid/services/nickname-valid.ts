/**
 * nickname-valid service
 */

export default () => ({
  nickNameValidCheck: async (nickName: string) => {
    try {
      const entries = await strapi.entityService.findOne(
        "api::users.users",
        nickName,
        {
          fields: [],
          pouplate: "",
        }
      );
      return entries;
    } catch (err) {
      return err;
    }
  },
});
