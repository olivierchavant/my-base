module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '14a343d6547c9216d5b4ac3d0457fe01'),
  },
});
