import { isAPIUser } from "../middlewares";
import { getAllPosts } from "../controllers/posts";
import express from "express";

export default (router: express.Router) => {
  router.get("/posts", isAPIUser, getAllPosts);
};
