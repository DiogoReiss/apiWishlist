import { Request, Response } from 'express';
import log from '../utils/logging';
import wishlistSchema from '../models/wishlistModel';
import { IWishlistSchema } from '../utils/types';
import { Document } from 'mongoose';


export default async function createWishlist (req: Request, Res: Response) {
  const { user_id: userID, first_name, last_name, email, products}: IWishlistSchema = req.body
  var objProduct = {
    product_id: products[0].product_id,
    title: products[0].title,
    image_src: products[0].image_src,
    product_url: products[0].product_url,
  }
  if (!userID || !first_name || !last_name || !email || !products) {
    log.error("MongoDB", "Invalid wishlist");
    return Res.status(400).json("Invalid request");
  } else {
    const user = await wishlistSchema.findOne({ user_id: userID }, async (err: any, response: Document) => {
      if (!response) {
        await wishlistSchema.create(req.body);
        log.info("MongoDB", "Create a new user and wishlist");
        return Res.status(200).json(user);
      } else {
        const product = await wishlistSchema.findOne({ "products.product_id": objProduct.product_id, user_id: userID }).then(async (wish) => {
          if (!wish) {
            const addProduct = await wishlistSchema.updateOne({ user_id: userID }, { $push: { products: objProduct } }, { upsert: true, useFindAndModify: false })
            log.info("MongoDB", "added a new product");
            return Res.status(200).json("added a new product");
          } else {
            log.error("MongoDB", "The product already exists");
            return Res.status(400).json(wish);
          }
        })
      }
    })
  };
};