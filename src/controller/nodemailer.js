import {
  saveEmail,
  sendEmailMessageReceived,
} from "../helpers/email.helper.js";

const saveMessage = (req, res) => {
  const { to, name, message } = req.body;
  console.log(to, name, message);
  try {
    saveEmail(name, message, to);
    sendEmailMessageReceived(to, name);
    return res.status(200).json({
      message: "Email enviado con éxito",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error al enviar el email: " + error.message,
    });
  }
};

export default saveMessage;
