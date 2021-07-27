import * as dotenv from 'dotenv';
import * as path from 'path';

export class Env{
    public static config(){
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        return process.env;
    }
    public static configItem(key:string=""){
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        return process.env[key] as string;
    }
}