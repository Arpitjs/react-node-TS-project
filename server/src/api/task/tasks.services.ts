import { PrismaClient } from "@prisma/client";
import { ITask, rawTaskType } from "./tasks.model";

const prisma = new PrismaClient();

const getAllTasks = async (): Promise<ITask[]> => {
    try {
        const tasks = await prisma.task.findMany();
        return tasks;
    } catch (error) {
        throw Error("Error while getting Tasks");
    }
};

const getTask = async (id: number): Promise<ITask> => {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: id,
            },
        });
        return task;
    } catch (error) {
        throw Error("Error while getting Task");
    }
};

const createTask = async (newTask: rawTaskType): Promise<ITask> => {
    try {
        const task = await prisma.task.create({
            data: {
              name: newTask.name,
              completed: newTask.completed
            },
        });
        return task;
    } catch (error) {
        throw Error("Error while creating Task");
    }
};

const updateTask = async (id: number, toUpdate: rawTaskType): Promise<ITask> => {
    try {
        const updatedTask = await prisma.task.update({
            where: {
                id: id,
            },
            data: {
                name: toUpdate.name,
              completed: toUpdate.completed
            },
        });
        return updatedTask;
    } catch (error) {
        throw Error("Error while updating Task");
    }
};

const deleteTask = async (id: number): Promise<ITask> => {
    try {
        const deletedTask = await prisma.task.delete({
            where: {
                id: id,
            },
        });

        return deletedTask;
    } catch (error) {
        throw Error("Error while deleting Task");
    }
};

export const TasksServices = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
