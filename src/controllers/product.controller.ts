import { T } from "../libs/types/common";
import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/types/Errors";
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";


const productService = new ProductService();
const productController: T = {};

/*SPA*/


/*SSR*/

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        const data = await productService.getAllProducts()
       res.render("products", {products: data});

    } catch (err) { //ERROR PROTECTION
        console.log("something went wrong", err);
        if(err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standart.code).json(Errors.standart)
    }
    };

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
        try {
            console.log("createNewProduct");
            if(!req.files?.length) 
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
            
            const data: ProductInput = req.body;
            data.productImages = req.files?.map(ele => {
                return ele.path.replace(/\\/g, "/");
            });

            await productService.createNewProduct(data)
            res.send(
                `<script> alert("Successfully created !"); window.location.replace('/admin/product/all')</script>`
                );
            
            
        } catch (err) { //ERROR PROTECTION
            console.log("something went wrong", err);
            const message = 
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
            res.send(`
            <script> alert("${message}"); window.locaton.replace('/admin/product/all')</script>`
            );
        }
        };
   
   
 productController.updateChosenProduct = async(req: Request, res: Response) => {
            try {
                console.log("updateChosenProduct");
               const id = req.params.id;
               const result = await productService.updateChosenProduct(id, req.body)
                res.status(HttpCode.OK).json({data: result});
                
            } catch (err) { //ERROR PROTECTION
                console.log("something went wrong", err);
                if(err instanceof Errors) res.status(err.code).json(err)
                else res.status(Errors.standart.code).json(Errors.standart)
            }
            }
    

        


    export default productController;