import express, { Request, Response} from "express";
import {T} from "../libs/types/common"
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
try {
    console.log("goHome");
    //LOGIC
    //SERVICE MODEL
    //...
    res.send("Home page");
} catch (err) { //ERROR PROTECTION
    console.log("something went wrong", err);
}
}

restaurantController.goLogin = (req: Request, res: Response) => {
    try {
        console.log("goLogin");
        res.send("Login page");
    } catch (err) {
     console.log("something went wrong", err);
    }
    }

 restaurantController.goSign = (req: Request, res: Response) => {
     try {
         console.log("goSignUp");
         res.send("Sign up");
      } catch (err) {
        console.log("something went wrong", err);
  }
    }


    export default restaurantController;