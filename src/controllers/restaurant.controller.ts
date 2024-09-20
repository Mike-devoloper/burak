import express, { Request, Response} from "express";
import { MemberInput, LoginInput, AdminRequest } from "../libs/types/member";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/types/enums/member.enum";
import Errors, { Message, } from "../libs/types/Errors";

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
try {
    console.log("goHome");
    //LOGIC
    //SERVICE MODEL
    //...
    res.render("home");
    //send / json / redirect / end / render
} catch (err) { //ERROR PROTECTION
    console.log("something went wrong", err);
}
}

restaurantController.goLogin = (req: Request, res: Response) => {
    try {
        console.log("goLogin");
        res.render("login");
    } catch (err) {
     console.log("something went wrong", err);
     res.redirect("/admin")
    }
    }

    restaurantController.goSign = (req: Request, res: Response) => {
      try {
          console.log("goSignUp");
          res.render("signup");
       } catch (err) {
         console.log("something went wrong", err);
   }
     }


    restaurantController.goLoginProcces = async(
      req: AdminRequest, 
      res: Response
      ) => {
        try {
            console.log("GoLoginProcces");
            console.log("body:", req.body);
            const input: LoginInput = req.body,
            result = await memberService.processLogin(input);
            //TODO: SESSIONS AUTHENTICATION
            req.session.member = result;
           req.session.save(function () {
            res.send(result);
          });

         } catch (err) {
          const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
          res.send(`<script> alert("${message}"); window.locaton.replace('admin/login')</script>`)
     }
       }



       restaurantController.proccessSignUp = async (
        req: AdminRequest,
        res: Response
         ) => {
        try {
            console.log("proccessSignUp");
            console.log("body", req.body);

            const newMember: MemberInput = req.body;
            newMember.memberType = MemberType.RESTAURANT;
            const result = await memberService.proccessSignup(newMember);
          //TODO: SESSIONS AUTHENTICATION
          req.session.member = result;
          req.session.save(function () {
            res.send(result);
          });

         } catch (err) {
           console.log("something went wrong", err);
           const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
           res.send(`<script> alert("${message}"); window.locaton.replace('admin/signup')</script>`)
     }
       }

       restaurantController.logout = async (
        req: AdminRequest,
        res: Response
         ) => {
        try {
            console.log("logout");
            req.session.destroy(function() {
              res.redirect("/admin");
            })
         } catch (err) {
           console.log("logout went wrong", err);
          res.redirect("/admin");
     }
       }

       restaurantController.checkAuthSession = async (
        req: AdminRequest,
        res: Response
         ) => { 
          try {
            console.log("checkAuthSession")
            if(req.session?.member) res.send(`<script> alert("Hi, ${req.session.member.memberNick}")</script>`)
            else {
              res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`);
            }
          } catch (err) {
            console.log("Error, checkAuthSession", err);
            res.send(err);
          }
          }
         
        

           
    


    export default restaurantController;