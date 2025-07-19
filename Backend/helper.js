// helper.js
const nodemailer = require("nodemailer");

function capitalizeFirstLetter(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: "mail.reconnectid.qa",
  port: 465,
  secure: true,
  auth: {
    user: "contact@reconnectid.qa",
    pass: "*",
  },
});

// Send Email Function
const sendEmail = async ({
  firstName,
  lastName,
  email,
  companyName,
  jobTitle,
  message,
}) => {
  try {
    const formattedFirstName = capitalizeFirstLetter(firstName);
    const formattedLastName = capitalizeFirstLetter(lastName);
    const formattedEmail = email.toLowerCase();
    const formattedCompany = capitalizeFirstLetter(companyName);
    const formattedJobTitle = capitalizeFirstLetter(jobTitle);

    const htmlContent = `
      <div style="background-color:#f4f4f4; padding:40px 0; font-family:Arial, sans-serif;">
        <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1); border:1px solid #ddd;">
          <div style="background-color:rgb(26, 29, 65); color:#ffffff; padding:20px 30px;">
            <h2 style="margin:0; font-size:22px;">📬 New Message from ${formattedFirstName} ${formattedLastName}</h2>
          </div>
          <div style="padding:30px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px; color:#333;">
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eee;">
                  <strong style="color:rgb(26, 29, 65);">Name:</strong><br>
                  ${formattedFirstName} ${formattedLastName}
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eee;">
                  <strong style="color:rgb(26, 29, 65);">Email:</strong><br>
                  ${formattedEmail}
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eee;">
                  <strong style="color:rgb(26, 29, 65);">Company:</strong><br>
                  ${formattedCompany}
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eee;">
                  <strong style="color:rgb(26, 29, 65);">Job Title:</strong><br>
                  ${formattedJobTitle}
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <strong style="color:rgb(26, 29, 65);">Message:</strong><br>
                  <div style="white-space:pre-line;">${message}</div>
                </td>
              </tr>
            </table>
          </div>
          <div style="background-color:#f0f0f0; color:#888; padding:15px 30px; text-align:center; font-size:12px;">
            This message was sent via the ReconnectID contact form.
          </div>
        </div>
      </div>
    `;


    const mailOptions = {
      from: "contact@reconnectid.qa",
      to: "contact@reconnectid.qa",
      replyTo: formattedEmail,
      subject: `New message from ${formattedFirstName} ${formattedLastName}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      status: "success",
      message: "Email sent successfully",
      info,
    };
  } catch (error) {
    return {
      status: "failed",
      message: error.message,
    };
  }
};

module.exports = sendEmail;