import 'dotenv/config';

export default () => ({
  app: {
    name: String(process.env.APP_NAME),
    port: parseInt(String(process.env.APP_PORT), 10) || 3000,
    cors: String(process.env.APP_CORS) === 'true' || false,
  },
  database: {
    host: String(process.env.DATABASE_HOST),
    port: parseInt(String(process.env.DATABASE_PORT), 10) || 5432,
    user: String(process.env.DATABASE_USER),
    password: String(process.env.DATABASE_PASSWORD),
    dbname: String(process.env.DATABASE_DBNAME),
  },
});
