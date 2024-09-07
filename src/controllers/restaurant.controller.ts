import express, { Request, Response} from "express";
import {T} from "../libs/types/common"


const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
try {
    res.send("Home page");
} catch (err) {
    console.log("something went wrong", err);
}
}

restaurantController.goLogin = (req: Request, res: Response) => {
    try {
        res.send("Login page");
    } catch (err) {
     console.log("something went wrong", err);
    }
    }

 restaurantController.goSign = (req: Request, res: Response) => {
     try {
         res.send("Sign up");
      } catch (err) {
        console.log("something went wrong", err);
  }
    }


    export default restaurantController;