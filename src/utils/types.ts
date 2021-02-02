import { Document } from "mongoose";

export interface IProducts{
  product_id: number;
  title: string;
  image_src: string;
  product_url: string
};


export interface IWishlistSchema extends Document{
  user_id: number;
  first_name: string; 
  last_name: string;
  email: string;
  products: IProducts[]
};