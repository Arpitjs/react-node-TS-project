import { User } from "@prisma/client";
import { Request } from "express";
import { IUser } from "../users/users.model";

export type rawTaskType = {
  name: string;
  completed: boolean;
  author?: IUser;
  authorId?: Number;

};

export interface ITask {
  id: number;
  name: string;
  completed: boolean;
  author?: IUser;
  authorId?: Number;
}

export interface IGetTasksReq extends Request {}
export interface IGetTaskReq extends Request<{ id: ITask["id"] }> {}
export interface ICreateTaskReq extends ITask, Request {}
export interface IUpdateTaskReq
  extends Request<
    { id: ITask["id"] },
    { name: ITask["name"]; completed: ITask["completed"] },
    ITask
  > {}
export interface IDeleteTaskReq extends Request<{ id: ITask["id"] }> {}
