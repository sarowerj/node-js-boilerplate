import Model from "./Model";
import { Env } from "../providers/Env";

// Load Entity
import { Emails as EmailsEntity } from "../entity/Email";
import { EmailTemplates as EmailTemplatesEitity } from "../entity/EmailTemplates";
import { Users as UsersEntity } from "../entity/User";

// Load Services
import CommonServices from "../services/CommonServices";

class Emails extends Model{

    /**
     * 
     * @param formData Users form data.
     * @param user collection from database.
     * @returns created email record. 
     */
    registrationThankyou = async (user:UsersEntity) =>{ 
        const emailTemplate:any = await this.masteringLayout({layout:"LAYOUT", body:"REGISTRATION_SLUG_THANK_YOU"},user);

        const emailData = new EmailsEntity();
        emailData.user_id = user.id;
        emailData.from = Env.configItem('EMAIL_FROM');
        emailData.to = user.email;
        emailData.subject = emailTemplate.body.subject as string;
        emailData.message =  emailTemplate.layoutMessage as string;
        emailData.email_type = 1;
        emailData.sent_count = 0;
        emailData.status = 1;
        emailData.created_by = user.id;
        emailData.sent_by= 0;
        const createEmail = await this.create(EmailsEntity, emailData);
        return createEmail;
    }

    /**
     * @description Create an email collection with email verification link. 
     * @param user Created user's info
     * @returns Email's collection or null
     */
    emailVerificationLink = async (user:any) =>{
        const emailTemplate:any = await this.masteringLayout({layout:"LAYOUT", body:"REGISTRATION_SLUG_EMAIL_VERIFICATION"},user);
        if(!emailTemplate){
            return false;
        }
        const emailData = new EmailsEntity();
        emailData.user_id = user.id;
        emailData.from = Env.configItem('EMAIL_FROM');
        emailData.to = user.email;
        emailData.subject = emailTemplate.body.subject as string;
        emailData.message =  emailTemplate.layoutMessage as string;
        emailData.email_type = 1;
        emailData.sent_count = 0;
        emailData.status = 1;
        emailData.created_by = user.id;
        emailData.sent_by= 0;
        const createEmail = await this.create(EmailsEntity, emailData);
        return createEmail;
    }

    /**
     * @description Mastering email template with selected layout.
     * @param templates Template configuration Main template and layout template
     * @param User Created user info
     * @returns Generated email template, Layout Template, Body Template
     */
    private masteringLayout = async (templates:any, User:UsersEntity) =>{ 
        
        const emailTemplate = await this.findMany(EmailTemplatesEitity, 'slug', [Env.configItem(templates.layout), Env.configItem(templates.body)]);
        
        if(!emailTemplate){ 
            return false;
        }
        // Segregate layout and body
        let layout:EmailTemplatesEitity = emailTemplate[0];
        let body:EmailTemplatesEitity = emailTemplate[1];

        emailTemplate.map((item:EmailTemplatesEitity, index:number) =>{
            if(item.slug === Env.configItem(templates.layout)){
                layout = item;
            }else{
                body = item;
            }
        })

        const bodyMessage = CommonServices.batchStrReplace(body.message, /_NAME_|_LINK_/gi,{
            _NAME_: User.firstName,
            _LINK_: CommonServices.generateEmailVerificationToken(),
        })
        const layoutMessage = CommonServices.batchStrReplace(layout.message,/_CONTENT_/gi,{
            _CONTENT_:bodyMessage
        })

        return {layoutMessage:layoutMessage,body:body,layout:layout};
    }

}
export default new Emails;