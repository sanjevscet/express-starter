import { Router, Request, Response } from "express";
import {UserService} from '@san/db';

const authRouter = Router();


authRouter.get("/login", async(_: Request, res: Response) => {
    const users = await UserService.getAll();
    return res.json({status: "ok", users})
});

export default authRouter;