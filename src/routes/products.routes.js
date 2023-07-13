import { Router } from "express";
import { ProductManager } from "../dao/productManager.js";

const router = Router();

const productService = new ProductManager ("products.json");

router.get("/products", async(req,res)=>{
    try {
        console.log(req.query);
        let limit = req.query.limit;
        console.log("El limite es",limit);
        let products = productService.getProduct();
        let limitedProducts =[];
        if (limit || limit >= products.length){
            return await res.send (limitedProducts = products.slice(0,limit));
        }else{
            return await res.send(products);
        }
    } catch (error) {
        console.log(error.message);
    }
});

router.get("/products/:pid", async(req,res)=>{
    try {
        let productID = parseInt(req.params.pid);
        console.log(productID);
        let product = productService.getProductByID(productID);
        return await res.send(product);   
    } catch (error) {
        console.log(error.message);
    }
});




export { router as productsRouter } 