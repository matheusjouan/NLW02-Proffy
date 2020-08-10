import 'reflect-metadata';

import express from 'express';
import routes from './routes/routes';

import cors from 'cors';

import { errors } from 'celebrate';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
