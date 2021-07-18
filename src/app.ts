import express from 'express';
import { router } from './routes';
require('dotenv').config();

export const app = express();
app.use('/', router);
