import mongoose from "mongoose";
import Customers from "../models/Customer.js";

export const viewCustomers = async (req, res) => {
  try {
    const customers = await Customers.find();
    // console.log(customers);
    res.status(200).json({ customers: customers });
  } catch (error) {
    res.status(500).json({ message: "Something has wrong!" });
  }
};
