import fs from "fs";
import nodemailer from "nodemailer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { nodemailerConfig } from "../config/nodemailer.js";

export const sendEmailMessageReceived = (to, name) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pathname = join(__dirname, "../html/greeting.html");

  const file = fs
    .readFileSync(pathname, { encoding: "utf-8" })
    .toString()
    .replace("${name}", name);

  const transporter = nodemailer.createTransport(nodemailerConfig);
  transporter.sendMail({
    from: nodemailerConfig.auth.user,
    to,
    subject: "Hemos recibido tu mensaje",
    html: file,
  });
};

export const saveEmail = (name, message, email) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  transporter.sendMail({
    from: nodemailerConfig.auth.user,
    to: nodemailerConfig.auth.user,
    subject: `Mensaje de ${name} - ${email}`,
    text: message,
  });
};
