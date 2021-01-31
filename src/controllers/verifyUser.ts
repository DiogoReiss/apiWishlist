import db from '../database/connection';
import { request, Request, Response } from 'express'
import addUser from './addUser';


export default async function verifyUser(req: Request, res: Response) {
  const { userID } = req.body

  const user = await db.select('first_name')
    .from('users')
    .where('id', userID)
    .then(async (userExist) => {
      if (userExist.length === 0) {
        await addUser(req, res)
      } else {
        return true
      }
    }).catch((err) => {
      console.log(err)
    })
}