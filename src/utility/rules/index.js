import localize from "@localize";

export default {
  username: {
    required: { value: true, message: localize.t("rules.username") },
  },
  password: {
    required: { value: true, message: localize.t("rules.password") },
  },
};
