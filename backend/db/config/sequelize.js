import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: __dirname + "/../.env" });

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
  },
);

export default sequelize;

sequelize
  .authenticate()
  .then(() => console.log("Connection established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));
