/**
 * Load dependencies...
 */
import express from "express";

import * as dotenv from 'dotenv';
import * as path from 'path';

import Routes from './Routes';

import Karnel from './../middlewares/karnel';

import logger from "./Logger";

class App {
	private app:any;
	private env:any;

	constructor(){
		dotenv.config({ path: path.join(__dirname, '../../.env') });
		this.env = process.env;

		this.app = express();
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended:true}));
		
		/**
		 * Mount Middlewares
		 */
		this.mountMiddlewares();

		/**
		 * Mount routes
		 */
		this.mountRoutes();
	}

	/**
	 * Run Node Server
	 */
	public loadServer (): void {
		try {
			this.app.listen(this.env.PORT, (): void => {
				console.log(`Connected successfully on port ${this.env.PORT}`);
			});
		} catch (error) {
			logger.error(`Could not load the server: ${error.message}`)
		}
	}
 
	/**
	 * Mounts all the defined routes
	 */
	private mountRoutes (): void {
		this.app = Routes.mountWeb(this.app);
	}

	/**
	 * Mounts all the defined middlewares
	 */
	private mountMiddlewares (): void {
		this.app = Karnel.init(this.app);
	}
}

export default new App;
