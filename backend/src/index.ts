import express, { Request, Response } from "express";
import "dotenv/config";
import { z } from "zod";
import sendEmail from "../utils/email";

const app = express();

app.use(express.json());

export const contactSchema = z.object({
    firstname: z
        .string({ message: "Firstname is required." })
        .min(3, { message: "Firstname should be atleast 3 characters." }),
    lastname: z
        .string({ message: "Lastname is required." })
        .min(3, { message: "Lastname should be atleast 3 characters." }),
    email: z
        .string({ message: "Email is required." })
        .email({ message: "Email is not valid." }),
    topic: z.string({ message: "Topic is required." }), //TODO: use enum with options in frontend.
    message: z
        .string({ message: "Message is required." })
        .min(5, { message: "Message should be atleast 5 characters." }),
});
app.get("/", (req: Request, res: Response) => {
    res.send("hello i am working fine");
});
app.post("/contact", async (req: Request, res: Response) => {
    const { data, error } = contactSchema.safeParse(req.body);
    if (error) {
        res.status(400).json({ success: false, message: "Params missing." });
        return;
    }
    await sendEmail(data);
    res
        .status(200)
        .json({ success: true, message: "Contact form submitted successfully." });
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`App started at port ${process.env.PORT || 8000}`);
});
