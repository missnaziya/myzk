const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

 const sendEmail = async ({ to, subject, text, html }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                // user: process.env.EMAIL_USER || "missnaziya24@gmail.com", // From .env
                // pass: process.env.EMAIL_PASS || "mtjb ubjs ckyn jbal",  // From .env (App Password)
                user: process.env.EMAIL_USER || "myzkdtm@gmail.com", // From .env
                pass: process.env.EMAIL_PASS || "ocbu zuli wpln yyaq",  // From .env (App Password)
   
                
            },
            
            tls: {
                rejectUnauthorized: false // Ignore self-signed certificate issues
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || "missnaziya24@gmail.com" ,
            to, // Dynamically passed recipient
            subject, // Dynamically passed subject
            text, // Dynamically passed text
            html // Dynamically passed HTML content

            // SMTP_HOST=smtp.gmail.com
            // SMTP_PORT=587
            // EMAIL_USER=missnaziya24@gmail.com
            // EMAIL_PASS=mtjb ubjs ckyn jbal
            // DEFAULT_EMAIL_SENDER=missnaziya24@example.com

        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


module.exports = { sendEmail };
