import { randomBytes } from "crypto";
import Services from "./Services";

class CommonServices extends Services{
    /**
     * 
     * @param str Main string
     * @param pattern words need to replace as regular expression
     * @param data Old words and new words as object
     * @returns string
     */
    batchStrReplace(str:string, pattern:RegExp, data:any){
        str = str.replace(pattern, function(matched){
            return data[matched];
        });
        return str;
    }

    /**
     * @description Create unique string
     * @returns string unique string
     */
    generateEmailVerificationToken = () =>{
        return randomBytes(48).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
    } 
}

export default new CommonServices;