import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import loggingMiddleware from './middlewares/logging';
import { connectDB } from './services/databaseConnection';
import log from './utils/logging';

const api = express();

connectDB();
dotenv.config();

api.use(cors());
api.use(express.json());
api.use(loggingMiddleware);
api.use(routes)

api.listen(process.env.PORT || 5000, () => {
  log.info("initAPI", "Server started on http://localhost:3333")
});