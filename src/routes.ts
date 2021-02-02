import express from 'express';
import addProduct from './controllers/createList';
import removeProduct from './controllers/deleteList';
import verifyWishlist from './controllers/listWishlist';

const routes = express.Router();

routes.get('/api/wishlist/:id', verifyWishlist)

routes.post('/api/wishlist', addProduct)

routes.delete('/api/wishlist', removeProduct)

export default routes;