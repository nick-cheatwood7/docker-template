import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.get("/", (_req: Request, res: Response) => {
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

app.listen(4000, () => console.log("Server started on port 4000"));
