import express, { Request, Response} from "express";
import MemberService from "../models/Member.service";
import {T} from "../libs/types/common"
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/types/Errors";
 

const memberService = new MemberService();

//REACT
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        console.log("body", req.body);

        const input:MemberInput = req.body,
        result:Member = await memberService.signup(input);
        //TODO: TOKENS


        res.json({member: result});
     } catch (err) {
       console.log("Error signup", err);
       if(err instanceof Errors) res.status(err.code).json(err)
       else res.status(Errors.standart.code).json(Errors.standart);
     
 }
   }

    memberController.login = async(req: Request, res: Response) => {
        try {
            console.log("Login");
            console.log("body:", req.body);
            const input: LoginInput = req.body,
            result = await memberService.login(input);
            //TODO: TOKENS

            res.json({member: result})
         } catch (err) {
           console.log("Login signup", err);
          if(err instanceof Errors) res.status(err.code).json(err)
           else res.status(Errors.standart.code).json(Errors.standart);  
     }
       }



    export default memberController;