import nodemailer from "nodemailer";

const mail = {
  user: process.env.USER_GMAIL,
  pass: process.env.PASSWORD_GMAIL,
  url: process.env.URL,
};

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",

  auth: {
    user: mail.user,
    pass: mail.pass,
  },
});

/**
 * Envio de Emails .
 * @param email - Email de destinatario.
 * @param name - Nombre del destinatario.
 * @param code - Codeigo de verificacion para la validacion.
 *
 * @returns void.
 */
export const sendEmail = async (email: string, name: string, code: string) => {
  try {
    await transporter.sendMail({
      from: `CIF Playas <${mail.user}>`,
      to: email,
      subject: "Confirmacion de Registro de Cuenta en CIF Ranking Playas",
      text: "Verifica tu cuenta",
      html:`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              padding: 20px 0;
            }
            .header img {
              max-width: 150px;
            }
            .content {
              padding: 20px;
              text-align: center;
            }
            .content h2 {
              color: #333333;
            }
            .content p {
              color: #666666;
              line-height: 1.5;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              margin-top: 20px;
              background-color: #ff9900;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #999999;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://yourcompanylogo.com/logo.png" alt="CIF Ranking Playas Logo">
            </div>
            <div class="content">
              <h2>Hola ${name},</h2>
              <p>Gracias por registrarte en CIF Ranking Playas. Para confirmar tu cuenta, por favor haz clic en el siguiente enlace:</p>
              <a href="${mail.url}/verifyUser?q=${code}" target="_blank" class="button">Confirmar Cuenta</a>
            </div>
            <div class="footer">
              <p>Si no te has registrado en CIF Ranking Playas, por favor ignora este correo.</p>
              <p>&copy; 2025 CIF Ranking Playas. Todos los derechos reservados.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

export const sendPasswordResetEmail = async (email: string, name: string, resetToken: string) => {
  try {
    await transporter.sendMail({
      from: `CIF Ranking Playas <${mail.user}>`,
      to: email,
      subject: "Restablecer tu contraseña en CIF Ranking Playas",
      text: `Hola ${name}, para restablecer tu contraseña haz clic en el siguiente enlace: ${mail.url}/reset-password?token=${resetToken}`,
      html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              padding: 20px 0;
            }
            .header img {
              max-width: 150px;
            }
            .content {
              padding: 20px;
              text-align: center;
            }
            .content h2 {
              color: #333333;
              margin-bottom: 20px;
            }
            .content p {
              color: #666666;
              line-height: 1.5;
              margin-bottom: 20px;
            }
            .button {
              display: inline-block;
              padding: 12px 24px;
              margin: 20px 0;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              font-size: 16px;
            }
            .warning {
              color: #dc3545;
              font-weight: bold;
              margin: 15px 0;
            }
            .footer {
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #999999;
              border-top: 1px solid #eeeeee;
              margin-top: 20px;
            }
            .token-info {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
              word-break: break-all;
              font-family: monospace;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://yourcompanylogo.com/logo.png" alt="CIF Ranking Playas Logo">
              <h2>Restablecer Contraseña</h2>
            </div>
            <div class="content">
              <h2>Hola ${name},</h2>
              <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en CIF Ranking Playas.</p>
              
              <p>Por favor, haz clic en el siguiente botón para crear una nueva contraseña:</p>
              
              <a href="${mail.url}/reset-password?token=${resetToken}" target="_blank" class="button">Restablecer Contraseña</a>
              
              <p class="warning">Este enlace expirará en 24 horas. Si no lo usas en ese tiempo, deberás solicitar otro.</p>
              
              <p>Si no puedes hacer clic en el botón, copia y pega la siguiente URL en tu navegador:</p>
              
              <div class="token-info">
                ${mail.url}/reset-password?token=${resetToken}
              </div>
              
              <p>Si no solicitaste este cambio, por favor ignora este correo y considera actualizar tu contraseña por seguridad.</p>
            </div>
            <div class="footer">
              <p>Este correo fue enviado automáticamente. Por favor no respondas a este mensaje.</p>
              <p>&copy; ${new Date().getFullYear()} CIF Ranking Playas. Todos los derechos reservados.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    });
    console.log(`Correo de restablecimiento enviado a ${email}`);
  } catch (error) {
    console.error("Error al enviar el correo de restablecimiento:", error);
    throw new Error("No se pudo enviar el correo de restablecimiento");
  }
};