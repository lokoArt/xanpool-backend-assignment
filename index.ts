import express from 'express';
import { router } from './routes';
require('dotenv').config();

const app = express();
app.use('/', router);

app.listen(4000);
console.log('Server Running');
