import nodemailer from "nodemailer";
import { IContact } from "../types";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import path from "path";
import fs from "fs";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    service: "gmail",
    port:465,
    secure: true,
    auth:{
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    }
});

async function sendEmail(data: IContact){
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: "Contact Form Received A Message",
        html:`
        <p><b>Firstname: </b>${data.firstname}</p>
        <p><b>Lastname: </b>${data.lastname}</p>
        <p><b>Email: </b>${data.email}</p>
        <p><b>Topic: </b>${data.topic}</p>
        <p><b>Message: </b>${data.message}</p>
        `
    }
    const response = await transporter.sendMail(mailOptions,(err:Error|null,info: SMTPTransport.SentMessageInfo)=>{
        if(err){
            console.log("Failed to send the email. Writing to the file.");
            const filePath = path.join(__dirname,"contacts.txt");
            const contactData = `
                <p><b>Firstname: </b>${data.firstname}</p>
                <p><b>Lastname: </b>${data.lastname}</p>
                <p><b>Email: </b>${data.email}</p>
                <p><b>Topic: </b>${data.topic}</p>
                <p><b>Message: </b>${data.message}</p>
                `;
            if(fs.existsSync(filePath)){
                fs.appendFileSync(filePath,contactData);
            }
            else{
                fs.writeFileSync(filePath,contactData);
            }
        }
    });
}

export default sendEmail;