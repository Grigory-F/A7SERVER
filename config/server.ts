export default ({ env }) => ({
  host: env('HOST', '45.153.70.240'),
  port: env.int('PORT', 3010),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
