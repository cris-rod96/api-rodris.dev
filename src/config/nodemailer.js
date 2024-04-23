import { NODEMAILER_PASSWORD, NODEMAILER_USER } from "./envs.js";

export const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD,
  },
};
