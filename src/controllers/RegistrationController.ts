import { Request, Response } from "express";

// Load models
import Users from "../models/Users";
import Emails from "../models/Emails";

import Jwt from "jsonwebtoken";

// Utilities
import ResponseCode from "../providers/ResponseCode";
import { Env } from "../providers/Env";

class RegistrationController {
    
    /**
     * @description API for new user registration.
     * 
     * @Endpoint API_URL/register
     * @Method POST
     * 
     * @param req  User data as Request Payloads firstName, LastName, email, phone, registeringAs
     * @param res  HTTP response with status code status, message
     * @returns HTTP Response
     */
    async index(req:Request,res:Response){

        // Check is email exist on the database. 
        const isEmailExist = await Users.isEmailExist(req.body.email);
        if(isEmailExist){
            return res.status(ResponseCode.EMAIL_EXISTS.code)
            .send({status:ResponseCode.EMAIL_EXISTS.code, message:ResponseCode.EMAIL_EXISTS.message});
        }

        // Create new User
        const createUser = await Users.createNewUser(req.body);
        if(!createUser){
            return res.status(ResponseCode.COMMON_ERROR.code)
            .send({status:ResponseCode.COMMON_ERROR.code, message:ResponseCode.COMMON_ERROR.message});
        }

        // Send thank you email 
        const sendRegThankYouEmail = await Emails.registrationThankyou(createUser);
        if(!sendRegThankYouEmail){
            return res.status(ResponseCode.REGISTRATION_THANK_YOU_EMAIL_FAILD.code)
            .send({status:ResponseCode.REGISTRATION_THANK_YOU_EMAIL_FAILD.code, message: ResponseCode.REGISTRATION_THANK_YOU_EMAIL_FAILD.message})
        }

        // Send thank you email 
        const sendRegEmailVerificationEmail = await Emails.emailVerificationLink(createUser);
        if(!sendRegEmailVerificationEmail){
            return res.status(ResponseCode.REGISTRATION_EMAIL_VERIFICATION_LINK_FAILD.code)
            .send({status:ResponseCode.REGISTRATION_EMAIL_VERIFICATION_LINK_FAILD.code, message: ResponseCode.REGISTRATION_EMAIL_VERIFICATION_LINK_FAILD.message})
        }

        // Generate final response
        return res.status(ResponseCode.REGISTRATION_SUCCESS.code)
        .send({status:ResponseCode.REGISTRATION_SUCCESS.code, message:ResponseCode.REGISTRATION_SUCCESS.message});
    }

    async validateToken(req:Request, res:Response){

        // const hello = await Users.createTempProfile();
        // console.log({hello}); 

        Jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlNhcm93ZXIiLCJpYXQiOfjE2MjY1NTcxMjQsImV4cCI6MTc4MjA3NzEyNH0.Hc1vvD0QhpMee3t8bTUXGuGmNz-1Wt5B613a7p0jfbw', Env.configItem('TOKEN_SECRET'), (err:any, user:any) =>{
            try{
                console.log({user});
            }
            catch{
                // console.log(err); 
            }
        })

        res.status(200).send({message:'Sarower'});
    }
}

export default new RegistrationController;