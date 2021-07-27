import Model from './Model';
import { Users as UsersEntity } from '../entity/User';
import { UsersTemp as UsersTempEntity } from '../entity/UsersTemp';
import jwt from 'jsonwebtoken';
import { Env } from '../providers/Env';
import { UsersTemp } from '../entity/UsersTemp';


class Users extends Model{

    /**
     * @description If found user, then returns user collection. But if not found user, then returns null
     * @param string userEmail as object {column:value}
     * @returns user data or null
     */
    
    isEmailExist = async (userEmail:string) =>{
        return await this.findOne(UsersEntity, {email:userEmail});
    }

    /**
     * @description Create new user.
     * @param object formData User information as object
     * @returns User collection, if created user.
     */
    createNewUser = async (formData:any) =>{
        const userData = new UsersTemp();
        userData.firstName = formData.firstName;
        userData.lastName = formData.lastName;
        userData.email = formData.email;
        userData.email_verified = 0;
        userData.phone = formData.phone;
        userData.phone_verified = 0;
        userData.role = formData.registeringAs;
        userData.token = jwt.sign({id:userData.firstName}, Env.configItem('TOKEN_SECRET'), { expiresIn: '1800d' });
        const createUser = await this.create(UsersTemp, userData);
        return createUser;
    }
}

export default new Users;