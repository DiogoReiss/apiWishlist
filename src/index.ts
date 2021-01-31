import express from 'express';
import cors from 'cors';
import routes from './routes'

const api = express();

api.use(cors());

require('dotenv').config();
api.use(express.json());
api.use(routes)

api.listen(process.env.PORT || 5000, () => {
  console.log('tamo on!')
});