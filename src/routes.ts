import express from 'express';
import addProduct from './controllers/addProduct';
import removeProduct from './controllers/removeProduct';
import verifyWishlist from './controllers/verifyWishlist';

const routes = express.Router();

routes.get('/api/wishlist/:id', verifyWishlist)

routes.post('/api/wishlist', addProduct)

routes.delete('/api/wishlist', removeProduct)

export default routes;