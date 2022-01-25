module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4c4d998f1ff2a61d7bb88dcfbeeac30'),
  },
});
