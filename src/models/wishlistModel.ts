import { Schema, model } from "mongoose";;
import { IWishlistSchema } from "../utils/types";

export const wishlistSchema: Schema<IWishlistSchema>  = new Schema ({
  user_id: Number,
  first_name: String,
  last_name: String,
  email: String,
  products: [
    {
      product_id: Number,
      title: String,
      image_src: String,
      product_url: String,
    }
  ]
});

export default model('wishlists', wishlistSchema)
