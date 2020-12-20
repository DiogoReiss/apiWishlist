import db from '../database/connection';
import { Products } from '../utils/types';
import { Request, Response } from 'express'

export default async function removeProduct(req: Request, res: Response) {
  const { id, title }: Products = req.body
  const deleteProduct = await db('wishlist')
    .where('id', id)
    .andWhere('title', title)
    .del()
    .then((exist) => {
      if (exist === 0) {
        return res.status(400).json('The product does not exist in the wishlist')
      } else {
        return res.status(200).json('product removed')
      }
    })
}