import express, { Express, Request, Response } from "express";
import { Env } from "@san/shared";

const app: Express = express();
const port = Env.port;

app.get("/", (_: Request, res: Response) => {
  res.send("Express + Typescript server " + Env.dbConfig.dbPass + " " + Env.dbConfig.dbName);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
