import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Customer from "./models/Customer.js";

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    await Customer.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./customer-dummy-data.json", import.meta.url))
    );
    await Customer.create(jsonProducts);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
