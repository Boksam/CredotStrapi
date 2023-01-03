/**
 * email-valid service
 */

export default () => ({
  emailValidCheck: async (email: string) => {
    try {
      const entries = await strapi.entityService.findOne(
        "api::users.users",
        email,
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
