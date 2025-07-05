import { Router } from "express";
import { getAllUsers } from "../controllers/user-controller";

const userRouter = Router();

userRouter.route("/users").get(getAllUsers);

export default userRouter;