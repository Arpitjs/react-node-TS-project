import { Request, Response } from "express";
import { ITask, rawTaskType } from "../task/tasks.model";

export type rawUserType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
    tasks?: ITask[];
};

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    newsletter: boolean;
    tasks?: ITask[];
}

export interface IGetUsersReq extends Request {}
export interface IGetUserReq extends Request<{ id: IUser["id"] }> {}
export interface ICreateUserReq extends IUser, Request {}
export interface IUpdateUserEmailReq
    extends Request<{ id: IUser["id"] }, { email: IUser["email"] }, IUser> {}
export interface IDeleteUserReq extends Request<{ id: IUser["id"] }> {}

export interface IGetUsersRes extends IUser, Response {}
export interface ILogin extends Request<{email: IUser["email"], password: IUser["password"]}, IUser>{}
