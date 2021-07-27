import {check, validationResult} from 'express-validator';
import { Request, Response } from "express";
import ResponseCode from '../../providers/ResponseCode';

const validateRegisterInfo = [
    check('firstName')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .bail()
        .isLength({min: 2})
        .withMessage('Minimum 2 characters required for first name')
        .bail()
        .isLength({max: 50})
        .withMessage('Maximum 50 character is allowed for first name')
        .bail(),
    check('lastName')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .bail()
        .isLength({min: 2})
        .withMessage('Minimum 2 characters required for last name')
        .bail()
        .isLength({max: 50})
        .withMessage('Maximum 50 character is allowed for last name')
        .bail(),
    check('email')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Email address is reqired')
        .bail()
        .normalizeEmail()
        .isEmail()
        .withMessage('Email address is not valid'),
    check('phone')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('Phone number is required')
        .bail()
        .isLength({min:11})
        .withMessage('Phone number is not valid')
        .bail()
        .isLength({max:14})
        .withMessage('Phone number is not valid')
        .bail(),
    check('registeringAs')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('User type is required')
        .bail()
        .isLength({min:1})
        .withMessage('Please select right user type')
        .bail()
        .isLength({max:1})
        .withMessage('Please select right user type')
        .bail(),
  (req:Request, res:Response, next:any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(ResponseCode.REGISTRATION_FORM_INVALID.code)
      .send({status:ResponseCode.REGISTRATION_FORM_INVALID.code, message:ResponseCode.REGISTRATION_FORM_INVALID.message, errors: errors.array()});
    next();
  }
];

export default validateRegisterInfo;