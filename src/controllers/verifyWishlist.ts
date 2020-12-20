import db from '../database/connection';
import { Request, Response } from 'express'


export default async function verifyWishlist(req: Request, res: Response) {

  const listProducts = await db
    .from('wishlist')
    .select('id', 'title', 'wish', 'imgID', 'imgSRC')

    return res.status(200).json(listProducts)
}