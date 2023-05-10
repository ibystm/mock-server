import { getUserBySessionToken } from "../db/users";
import express from "express";
import get from "lodash/get";
import merge from "lodash/merge";
import { API_KEY } from "../constants";

export const isAPIUser = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // extract API key
  const { ak } = req.query;
  if (ak !== API_KEY) {
    return res.sendStatus(400);
  }
  next();
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserIdObj = get(req, "identity._id") as unknown;

    if (typeof currentUserIdObj !== "object" || currentUserIdObj === null) {
      return res.sendStatus(403);
    }
    const currentUserId = currentUserIdObj.toString();

    if (currentUserId !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["ANTONIO_AUTH"];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const exsintingUser = await getUserBySessionToken(sessionToken);
    if (!exsintingUser) {
      return res.status(403);
    }

    merge(req, { identity: exsintingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
