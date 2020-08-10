import { Router } from 'express';
import classesRouter from './routes.classes';
import connectionsRouter from './routes.connections';

const routes = Router();

routes.use('/classes', classesRouter);
routes.use('/connections', connectionsRouter);

export default routes;
