import { Router } from "express";
import ProductManager from "../dao/mangersDB/ProductManger.js";


const router = Router()
const manager = new ProductManager();

router.get('/products', async (req, res) => {
    try {
        const { limit, page, sort, category, availability, query} = req.query

        
        const productsResponse = await manager.getProducts(limit, page, sort, category, availability, query);

        res.render('products',  {products: productsResponse.msg});
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');
    }
});



export default router;