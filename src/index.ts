import express from 'express';
import cors from 'cors';
import routes from './routes'

const api = express();

api.use(cors());

require('dotenv').config();
api.use(express.json());
api.use(routes)

api.listen(3333, () => {
  console.log('tamo on!')
});