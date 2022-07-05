import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import { Env } from '@san/shared';
import { AppDataSource } from '@san/db';
import { exit } from 'process';
import routes from './routes';
const app: Express = express();
const port = Env.port;

app.use(express.json());
app.use(routes);

app.get('/', (_: Request, res: Response) => {
    res.send('Express + Typescript server Sanjeev' + Env.dbConfig.dbPass + ' ' + Env.dbConfig.dbName);
});

app.listen(port, async () => {
    const result = await AppDataSource.initialize();
    if (!result) {
        console.error(`Unable to connect to db`);

        exit(0);
    }

    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
