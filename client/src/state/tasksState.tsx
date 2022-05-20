import create from 'zustand';

export type TaskStateType = {
  id?: string;
  name: string;
  completed: boolean;
};

type TasksStateType = {
  tasks: TaskStateType[] | void;
  setTasks: (Tasks: TaskStateType[] | void) => void;
};

export const TasksState = create<TasksStateType>((set, get) => {
  return {
    tasks: [],
    setTasks(tasks) {
      set({ tasks });
      return tasks;
    },
    action: () => {
      const tasks = get().tasks;
      return tasks;
    },
  };
});
