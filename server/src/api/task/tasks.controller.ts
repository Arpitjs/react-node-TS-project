import { Response } from "express";
import {
    ICreateTaskReq,
    IGetTasksReq,
    IGetTaskReq,
    IUpdateTaskReq,
    ITask,
    IDeleteTaskReq,
} from "./tasks.model";
import { TasksServices } from "./tasks.services";

export const getAllTasks = async (req: IGetTasksReq, res: Response) => {
  try {
    const tasks = await TasksServices.getAllTasks();

    if (tasks.length === 0) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: { tasks },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const getTask = async (req: IGetTaskReq, res: Response) => {
  try {
    const id = Number(req.params.id);

    const task = await TasksServices.getTask(id);

    if (!task) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const createTask = async (req: ICreateTaskReq, res: Response) => {
  try {
    const { name, completed }: ITask =
      req.body;
    const task = await TasksServices.createTask({
            name, completed, authorId: (<any>req).user.id
    });
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const updateTask = async (req: IUpdateTaskReq, res: Response) => {
    try {
      const { name, completed }: ITask =
        req.body;
  
      const task = await TasksServices.updateTask(Number(req.params.id), {
              name, completed
      });
      res.status(201).json({
        status: "success",
        data: {
          task,
        },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  };

export const deleteTask = async (req: IDeleteTaskReq, res: Response) => {
  try {
    const id = Number(req.params.id);

    await TasksServices.deleteTask(id);

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

