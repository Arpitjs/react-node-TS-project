import { Router } from "express";
import { authenticate } from "./../../utils";
import {
    getAllTasks, getTask, createTask, updateTask, deleteTask
} from "./tasks.controller";

const router: Router = Router();

router.use(authenticate)

router.route("/")
.get(getAllTasks)
.post(createTask);

router.route("/:id")
.get(getTask)
.put(updateTask)
.delete(deleteTask);

export default router;
