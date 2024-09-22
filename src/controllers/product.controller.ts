import { T } from "../libs/types/common";
import { Request, Response } from "express";
import Errors from "../libs/types/Errors";
import ProductService from "../models/Product.service";


const productService = new ProductService();
const productController: T = {};

productController.getAllProducts = (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
   
       res.render("products");

    } catch (err) { //ERROR PROTECTION
        console.log("something went wrong", err);
        if(err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standart.code).json(Errors.standart)
    }
    };

productController.createNewProduct = (req: Request, res: Response) => {
        try {
            console.log("createNewProduct");
           res.send("done");
            
            
        } catch (err) { //ERROR PROTECTION
            console.log("something went wrong", err);
            if(err instanceof Errors) res.status(err.code).json(err)
            else res.status(Errors.standart.code).json(Errors.standart)
        }
        };
   
   
 productController.updateChosenProduct = (req: Request, res: Response) => {
            try {
                console.log("updateChosenProduct");
               
                
                
            } catch (err) { //ERROR PROTECTION
                console.log("something went wrong", err);
                if(err instanceof Errors) res.status(err.code).json(err)
                else res.status(Errors.standart.code).json(Errors.standart)
            }
            }
    

        


    export default productController;