import axios from 'axios';

const baseUrl: any = 'http://localhost:3001/api/tasks';

interface TaskI {
  name: string;
  completed: boolean;
}

export interface TaskStateI extends TaskI {
  id: number;
  authorId?: string | null;
}

export const getAllTasks = async (): Promise<TaskStateI[] | void> => {
  try {
    const response = await axios.get(baseUrl);
    return response?.data?.data?.tasks;
  } catch (error) {
    throw new Error(`Cannot get Tasks. Error: ${error}`);
  }
};

export const getTaskById = async (id: number): Promise<TaskStateI | void> => {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot get Task. Error: ${error}`);
  }
};

export const createTask = async (task: TaskI): Promise<TaskStateI | void> => {
  try {
    const response = await axios.post(baseUrl, task);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot create an Task. Error: ${error}`);
  }
};

export const updateTask = async (id: number, task: TaskI): Promise<TaskStateI | void> => {
  try {
    const response = await axios.put(`${baseUrl}${id}`, task);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot update Task. Error: ${error}`);
  }
};

export const deleteTaskById = async (id: number): Promise<null | void> => {
  try {
    const response = await axios.delete(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Cannot delete Task. Error: ${error}`);
  }
};
