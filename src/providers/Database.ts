import mysql from "mysql2";
import { Env } from "./Env";

export const db = mysql.createConnection({
  host: Env.configItem('MYSQL_HOST'),
  user: Env.configItem('MYSQL_USER'),
  password: Env.configItem('MYSQL_PWD'),
  database: Env.configItem('MYSQL_DB')
});