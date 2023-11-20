module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b4c4d998f1ff2a61d7bb88dcfbeeac30"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "51727d4ff806bce83bd13f4085662aaa"),
  },
});
