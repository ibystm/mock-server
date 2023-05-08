import { getUserBySessionToken } from "../db/users";
import express from "express";
import get from "lodash/get";
import merge from "lodash/merge";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["ANTONIO_AUTH"];
    console.log({ sessionToken });

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const exsintingUser = await getUserBySessionToken(sessionToken);
    if (!exsintingUser) {
      return res.status(403);
    }

    merge(req, { indentity: exsintingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
