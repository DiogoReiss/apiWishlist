import { Request, Response } from 'express';
import log from '../utils/logging';
import wishlistSchema from '../models/wishlistModel';
import { IWishlistSchema } from '../utils/types';
import { Document } from 'mongoose';


export default async function removeProduct (req: Request, Res: Response) {
  const { user_id: userID, products} = req.body
  var product_id = products[0].product_id
  if (!userID || !products) {
    log.error("MongoDB", "Invalid wishlist");
    return Res.status(400).json("Invalid request");
  } else {
    const user = await wishlistSchema.findOne({ user_id: userID }, async (err: any, response: Document) => {
      if (!response) {
        log.error("MongoDB", "This user dont have a wishlist");
        return Res.status(400).json("This user dont have a wishlist");
      } else {
        const product = await wishlistSchema.findOne({ "products.product_id": product_id }).then(async (wish) => {
          if (!wish) {
            log.info("MongoDB", "The product does not exists");
            return Res.status(400).json("The product does not exists");
          } else {
            const removeProduct = await wishlistSchema.updateOne({ user_id: userID }, { $pull: { products: { product_id: product_id } } }, { upsert: true, useFindAndModify: false })
            log.info("MongoDB", "Product Deleted!");
            return Res.status(200).json(wish);
          }
        })
      }
    })
  };
};