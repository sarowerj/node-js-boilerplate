import App from "./providers/App";
import logger from "./providers/Logger";

/**
 * Run the app
 */

 import 'reflect-metadata';
 import { createConnection } from 'typeorm';

 
 createConnection()
  .then(() => {
    App.loadServer();
  })
  .catch((error: Error) => {
    logger.error(`Database connection failed with error ${error}`);
  });