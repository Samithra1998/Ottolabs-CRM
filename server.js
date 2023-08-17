import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import customerRoutes from "./routes/customerRoutes.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.route("/").get((req, res) => {
  // throw new Error("error");
  res.send("Welcome");
});

app.use("/api/v1/customers", customerRoutes);

const start = async () => {
  try {
    connectDB(process.env.CONNECTION_STRING);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
