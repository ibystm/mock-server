import { isAuthenticated } from "../middlewares";
import { getAllUsers } from "../controllers/users";
import express from "express";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
};
