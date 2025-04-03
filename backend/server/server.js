import express from "express";
import cors from "cors";
import { getAllUsers } from "./controllers/userController.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/users", getAllUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
