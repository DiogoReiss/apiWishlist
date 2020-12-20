import db from '../database/connection';
import { request, Request, Response } from 'express'
import addUser from './addUser';


export default async function verifyUser(req: Request, res: Response) {
  const { userID, first_name, last_name } = req.body

  const user = await db.select('first_name')
    .from('users')
    .where('id', userID)
    .andWhere('first_name', first_name)
    .andWhere('last_name', last_name)
    .then(async (userExist) => {
      if (userExist.length === 0) {
        await addUser(req, res)
      } else {
        return true
      }
    })
}