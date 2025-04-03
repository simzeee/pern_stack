import express from "express";
import cors from "cors";
import { getAllUsers } from "./controllers/userController.js";

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies for all incoming requests
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/users", getAllUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
