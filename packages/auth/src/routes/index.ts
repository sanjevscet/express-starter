import { Router, Request, Response, NextFunction } from 'express';
import authRouter from './auth.routes';

const dummyMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log({ req: req.body, p: req.query, path: req.path, hes: req.headers, he: req.header });
    if (req.body.name !== 'sanjeev') {
        res.json({ error: true, success: null });
        return;
    }
    next();
};

const routes = Router();
routes.use('/auth', dummyMiddleware, authRouter);

export default routes;
