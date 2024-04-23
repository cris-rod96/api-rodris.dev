import { Router } from "express";
import saveMessage from "../controller/nodemailer.js";

const router = Router();

router.post("/message/send", saveMessage);

export default router;
