import bcrypt from "bcryptjs";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const decrypt = (p1: string, p2: string) =>
  bcrypt.compare(p1, p2).then((match) => match);

export const authenticate = async (req: any, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
 return res.status(400).json({ msg: "token not provided." })
  }
  let token = req.headers.authorization.split(" ")[1];
  let verified = jwt.verify(token, process.env.JWT_SECRET);
  const user = await prisma.user.findFirst({
    where: {
      id: (<any>verified).id,
    },
  });
  req.user = user;
  next();
};
