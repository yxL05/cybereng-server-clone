import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import { getEnv } from "./dotenv.js";

dotenv.config();

const sequelize = new Sequelize(
  getEnv('DB_NAME'),
  getEnv('DB_USER'),
  getEnv('DB_PASS'),
  {
    host: getEnv('DB_HOST'),
    port: parseInt(getEnv('DB_PORT')) || 3306,
    dialect: 'mysql',
  }
);

// Testing the connection
(async () => {
  await sequelize.authenticate();
  console.log('MySQL connection established successfully.');
})();

export default sequelize;