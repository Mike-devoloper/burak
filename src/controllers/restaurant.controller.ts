import express, { NextFunction, Request, Response} from "express";
import { MemberInput, LoginInput, AdminRequest } from "../libs/types/member";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/types/enums/member.enum";
import Errors, { HttpCode, Message, } from "../libs/types/Errors";

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
            res.redirect("/admin/product/all");
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
            const file = req.file;
            if(!file) throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
            const newMember: MemberInput = req.body;
            newMember.memberImage = file?.path;
            newMember.memberType = MemberType.RESTAURANT;
            const result = await memberService.proccessSignup(newMember);
            newMember.memberPassword = "";
          //TODO: SESSIONS AUTHENTICATION
          req.session.member = result;
          req.session.save(function () {
            res.redirect("/admin/product/all");
          });

         } catch (err) {
           console.log("something went wrong", err);
           const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
           res.send(`<script> alert("${message}"); window.locaton.replace('/admin/signup')</script>`)
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
         
        

         restaurantController.verifyRestaurant = (
          req: AdminRequest, 
          res: Response, 
          next: NextFunction) => {
            if(req.session?.member?.memberType === MemberType.RESTAURANT) {
              req.member = req.session.member;
              next();
            } else {
              const message = Message.NOT_AUTHENTICATED;
              res.send(`<script> alert("${message}"); window.location.replace('/admin/login');</script>`)
            }
         }
           
    


    export default restaurantController;