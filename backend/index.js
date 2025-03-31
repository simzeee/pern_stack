import dotenv from "dotenv";
import sequelize from "./sequelize.js";
// eslint-disable-next-line no-unused-vars
import User from "./models/User.js"; // Import all your models

dotenv.config();

sequelize
  .sync({ alter: true }) // or { force: true } for a fresh start (drops existing tables)
  .then(() => console.log("Database synchronized successfully."))
  .catch((err) => console.error("Error synchronizing the database:", err));
