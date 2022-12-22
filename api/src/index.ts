import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import cors from "cors";

dotenv.config();

const __prod__ = process.env.NODE_ENV === "production";

const app = express();

app.use(
    cors({
        origin: __prod__ ? "127.0.0.1:443" : "http://localhost:3000",
        optionsSuccessStatus: 204,
        credentials: true
    })
);

// app.set("trust proxy" , server-ip-address)
app.set("trust proxy", true);
app.get("/api/people", (req: Request, res: Response) => {
    console.log("Incoming request from:", req.ip);
    res.json([
        {
            id: 1,
            name: "John Doe"
        },
        {
            id: 2,
            name: "Jane Doe"
        },
        {
            id: 3,
            name: "John Smith"
        }
    ]);
});

app.listen(4000, () => console.log("Server started on port 4000!"));
