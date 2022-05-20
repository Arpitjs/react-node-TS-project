import { Router } from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUserEmail,
  deleteUser,
  login,
} from "./users.controller";

const router: Router = Router();

router.post('/login', login)
router.route("/")
.get(getAllUsers)
.post(createUser);

router.route("/:id")
.get(getUser)
.put(updateUserEmail)
.delete(deleteUser);

export default router;
