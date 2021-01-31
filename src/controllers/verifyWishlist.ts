import db from '../database/connection';
import { Request, Response } from 'express'


export default async function verifyWishlist(req: Request, res: Response) {
  const listProducts = await db
    .from('wishlist')
    .where('user_id', req.params.id)
    .select('id', 'title', 'imgSRC', 'productURL')

  console.log(req.params.id)
  return res.status(200).json(listProducts)
}