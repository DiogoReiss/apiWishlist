import db from '../database/connection';
import { Products } from '../utils/types';
import { Request, Response } from 'express'
import verifyUser from './verifyUser';
import removeProduct from './removeProduct'

export default async function addProduct(req: Request, res: Response) {
  const { id, title, image, wish }: Products = req.body
  const { userID } = req.body
  await verifyUser(req, res)
  const verifyIfAlreadyExist = await db.select('id')
    .from('wishlist')
    .where('id', id)
    .andWhere('title', title)
    .then( async (alreadyExist) => {
      if (alreadyExist.length === 0) {
        const newProduct = await db('wishlist')
          .insert([{
            user_id: userID,
            id,
            title,
            imgID: image.id,
            imgSRC: image.src,
            wish
          }])
          .then((newProductID) => {
            console.log('inserted product', newProductID)
            return res.status(201).json('product inserted')
          }) 
      } else {
        console.log('Product already exists')
        return res.status(400).json('Product already in a wishlist')
      }
    })
}