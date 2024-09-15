import express, { Request, Response} from "express";
import { MemberInput, LoginInput } from "../libs/types/member";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/types/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
try {
    console.log("goHome");
    //LOGIC
    //SERVICE MODEL
    //...
    res.send("Home page");
    //send / json / redirect / end / render
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


    restaurantController.goLoginProcces = async(req: Request, res: Response) => {
        try {
            console.log("GoLoginProcces");
            console.log("body:", req.body);
            const input: LoginInput = req.body,
            result = await memberService.processLogin(input);
            //TODO: SESSIONS AUTHENTICATION

            res.send(result);
         } catch (err) {
           console.log("something went wrong", err);
           res.send(err);
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



       restaurantController.proccessSignUp = async (req: Request, res: Response) => {
        try {
            console.log("proccessSignUp");
            console.log("body", req.body);

            const newMember: MemberInput = req.body;
            newMember.memberType = MemberType.RESTAURANT;
            const result = await memberService.proccessSignup(newMember);
          //TODO: SESSIONS AUTHENTICATION

            res.send(result);
         } catch (err) {
           console.log("something went wrong", err);
          res.send(err);
     }
       }


    export default restaurantController;