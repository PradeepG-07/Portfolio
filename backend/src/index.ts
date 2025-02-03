import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();



app.use(express.json());

app.get("/",(req: Request,res: Response)=>{
    res.send("hello i am working fine");
});


app.listen(process.env.PORT || 8000,()=>{
    console.log(`App started at port ${process.env.PORT || 8000}`);
    
})