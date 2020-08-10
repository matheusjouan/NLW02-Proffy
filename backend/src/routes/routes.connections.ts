import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ConnectionController from '../controllers/ConnectionController';

const connectionsController = new ConnectionController();

const connectionsRouter = Router();

connectionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  connectionsController.create,
);
connectionsRouter.get('/', connectionsController.index);

export default connectionsRouter;
