import { Request, Response } from 'express';
import log from '../utils/logging';
import wishlistSchema from '../models/wishlistModel';

export default async function listWishlist(req:Request, res:Response) {
  const id: any =  req.params.id;
  await wishlistSchema.findOne({user_id: id}, async (err: any, response: Document) => {
    if (!response) {
      log.error("MongoDB", "Cannot find the wishlist", false);
      console.log('amigo estou aqui')
      return res.status(404).json(err);
    }
    res.status(200).send(response);
  });
}