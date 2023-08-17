import express from "express";
import { viewCustomers } from "../controlers/customerControler.js";

const routes = express.Router();

routes.get("/", viewCustomers);

export default routes;
