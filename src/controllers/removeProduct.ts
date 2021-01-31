import db from '../database/connection';
import { Products } from '../utils/types';
import { Request, Response } from 'express'

export default async function removeProduct(req: Request, res: Response) {
  const { id, userID }: Products = req.body
  const deleteProduct = await db('wishlist')
    .where('id', id)
    .andWhere('user_id', userID)
    .del()
    .then((exist) => {
      if (exist === 0) {
        return res.status(400).json('The product does not exist in the wishlist')
      } else {
        console.log(id, userID)
        return res.status(200).json('product removed')
      }
    }).catch((err) => {
      console.log(err)
    })
}