import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClassesController from '../controllers/ClassesController';

const classesController = new ClassesController();

const classesRouter = Router();

classesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      avatar: Joi.string().required(),
      bio: Joi.string().required(),
      whatsapp: Joi.string().required(),
      subject: Joi.string().required(),
      price: Joi.number().required(),
      schedule: Joi.array().items(
        Joi.object().keys({
          week_day: Joi.string().required(),
          from: Joi.string().required(),
          to: Joi.string().required(),
        }),
      ),
    },
  }),
  classesController.create,
);

classesRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      subject: Joi.string(),
      time: Joi.string(),
      week_day: Joi.string(),
    },
  }),
  classesController.index,
);

export default classesRouter;
