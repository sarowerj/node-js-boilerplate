import { Request, Response } from "express";
// import commonService from "../services/common.service";
import { db } from "../providers/Database";
import { OkPacket, RowDataPacket } from "mysql2";
import { Env } from "../providers/Env";

class HomeController{
	public static index (req: Request, res: Response, next:any) {
		db.query('SELECT * FROM customer', (err, result)=>{
			const rows = <RowDataPacket[]> result;
		})
		return res.status(200).send({message:'Trying to use service'});
	}

	public static async listUsers(req:Request,res:Response,next:any){
		// const ListData = await commonService.list(10,2);
		// const anotherData = commonService.testData();
		// console.log(anotherData);
		console.log(req.originalUrl);
		return res.status(200).send({message:'Trying to use service FFD asdf'});
	}

	public static listUsers3(req:Request,res:Response,next:any){
		// const anotherData = commonService.testData();
		// console.log(anotherData);
		return res.status(200).send({message:'New One'});
	}
}

export default HomeController;
