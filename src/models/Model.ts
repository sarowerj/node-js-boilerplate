import { getRepository } from 'typeorm';
import logger from '../providers/Logger';

class Model{
    /**
     * 
     * @param Entity 
     * @param where object for where clause.
     * @returns Collection of data or null
     */
    findOne:any = async (Entity:any, where:any) =>{
        try {
            const data =  await getRepository(Entity).findOne(where);
            return data;
        } catch (error) {
            logger.error(`${error}`);
            return null;
        }
    }

    /**
     * 
     * @param Entity 
     * @param column Selected column.
     * @returns Collection of data or null
     */
    findMany:any = async (Entity:any, column:string, values:any) =>{
        try {
            const data =  await getRepository(Entity).createQueryBuilder().where(column+" IN(:...values)",{ values: values }).getMany();
            return data;
        } catch (error) {
            logger.error(`${error}`);
            return null;
        }
    }
    
    /**
     * 
     * @param Entity UsersEntity
     * @param formData User information
     * @returns collection from database or null
     */
    create = async(Entity:any, formData:any) => {
        try{
            const data =  await getRepository(Entity).save(formData);
            return data;
        } catch(error){
            logger.error(`${error}`);
            return null;
        }
    }
}

export default Model;