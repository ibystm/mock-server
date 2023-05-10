import express from "express";
import authentication from "./authentication";
import user from "./user";
import post from "./post";

export const router = express.Router();
export default (): express.Router => {
  authentication(router);
  user(router);
  post(router);

  return router;
};
