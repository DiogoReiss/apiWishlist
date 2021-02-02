import express from 'express';
import cors from 'cors';
import routes from './routes'
import loggingMiddleware from './middlewares/logging';
import { connectDB } from './services/databaseConnection';
import log from './utils/logging';

const api = express();

connectDB();

api.use(cors());
api.use(express.json());
api.use(loggingMiddleware);
api.use(routes)

api.listen(3333, () => {
  log.info("initAPI", "Server started on http://localhost:3333")
});