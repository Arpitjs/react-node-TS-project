import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Response } from "express";
import {
  IUser,
  IGetUsersReq,
  IGetUserReq,
  ICreateUserReq,
  IUpdateUserEmailReq,
  IDeleteUserReq,
  ILogin,
} from "./users.model";
import { usersServices } from "./users.services";
import jwt from "jsonwebtoken";
import { decrypt } from "../../utils";

const prisma = new PrismaClient();

export const getAllUsers = async (req: IGetUsersReq, res: Response) => {
  try {
    const users = await usersServices.getAllUsers();

    if (users.length === 0) {
      return res.status(404).json({
        message: "Users not found",
      });
    }

    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const getUser = async (req: IGetUserReq, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await usersServices.getUser(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const createUser = async (req: ICreateUserReq, res: Response) => {
  try {
    const { firstName, lastName, email, password, newsletter, tasks }: IUser =
      req.body;

    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) return res.status(400).send("Email already exists.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);
    const user = await usersServices.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      newsletter,
      tasks,
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.status(201).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const updateUserEmail = async (
  req: IUpdateUserEmailReq,
  res: Response
) => {
  try {
    const { email } = req.body;
    const id = Number(req.params.id);

    const updatedUser = await usersServices.updateUserEmail(id, email);

    res.status(200).json({
      status: "success",
      data: { updatedUser },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const deleteUser = async (req: IDeleteUserReq, res: Response) => {
  try {
    const id = Number(req.params.id);

    await usersServices.deleteUser(id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const login = async (req: ILogin, res: Response) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(400).json({ msg: "Invalid credentails." });
    const isMatch = await decrypt(req.body.password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      return res.status(200).json({
        success: true,
        data: user,
        token,
      });
    } else {
      return res.status(400).json({ msg: "Invalid credentails." });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
