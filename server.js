import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { databaseConnection } from "./DB/connection.js";
import Router from "./Routes/user.route.js";
import path from "path";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

databaseConnection();

// Routes
app.use("/user", Router);

// Deployment code
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "Frontend", "dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`The app is listening on port: ${PORT}`);
});
