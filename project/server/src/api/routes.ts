import { Router } from "express";
import UsersRoutes from "./users/users.router";
import TaskRoutes from "./task/tasks.router";

const router: Router = Router();

router.use("/users", UsersRoutes);
router.use("/tasks", TaskRoutes);

export default router;
