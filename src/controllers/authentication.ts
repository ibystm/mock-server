import express from "express";
import { authentication } from "./../helpers/index";
import { createUser, getUserByEmail } from "../db/users";
import { random } from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    console.log({ email, password, username });
    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const exsintingUser = await getUserByEmail(email);
    if (exsintingUser) {
      res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
