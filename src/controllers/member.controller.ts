import express, { Request, Response} from "express";
import {T} from "../libs/types/common"


const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
try {
    res.send("Home page");
} catch (err) {
    console.log("something went wrong", err);
}
}

memberController.goLogin = (req: Request, res: Response) => {
    try {
        res.send("Login page");
    } catch (err) {
     console.log("something went wrong", err);
    }
    }

 memberController.goSign = (req: Request, res: Response) => {
     try {
         res.send("Sign up");
      } catch (err) {
        console.log("something went wrong", err);
  }
    }


    export default memberController;