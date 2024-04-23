import { config } from "dotenv";
config();

const {
  NODEMAILER_PASSWORD,
  NODEMAILER_USER,
  PORT,
  NODE_ENV,
  POSTGRES_URI_LOCAL,
  POSTGRES_URI_DEPLOY,
} = process.env;

const DB_URI = NODE_ENV
  ? {
      URI: POSTGRES_URI_DEPLOY,
      CONFIG: {
        logging: false,
        native: false,
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
      },
    }
  : {
      URI: POSTGRES_URI_LOCAL,
      CONFIG: {
        logging: false,
        native: false,
      },
    };

export { DB_URI, NODEMAILER_PASSWORD, NODEMAILER_USER, PORT };
