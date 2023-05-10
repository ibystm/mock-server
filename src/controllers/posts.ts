import express from "express";
import { POSTS } from "../__mock__/posts";

export const getAllPosts = async (
  req: express.Request,
  res: express.Response
) => {
  return res.status(200).json(POSTS);
};
