import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize({
  host: process.env.DB_HOST as string,
  port: 3306, // Use a porta correta para o MySQL (geralmente 3306)
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  dialect: "mysql",
});

export default connection;
