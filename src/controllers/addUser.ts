import db from '../database/connection';
import { Request, Response } from 'express'

export default async function addUser(req: Request, res: Response) {
  const { userID, first_name, last_name, email } = req.body

  const addNewUser = await db('users')
    .insert([{
      id: userID,
      first_name,
      last_name,
      email
    }])
    .then((userid) => {
      console.log('inserted a new user', userid)
      return res.status(201).json('inserted a new user')
    })
}