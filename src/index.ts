// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "@routes/user.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server test...");
});


app.use("/api/v1", userRouter)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});