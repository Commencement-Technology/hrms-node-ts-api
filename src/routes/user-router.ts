import { Router } from "express";
import { userController } from "../controllers/user-controller";

const userRouter = Router();

userRouter.route("/register").post(userController.registerUser);

export default userRouter;
