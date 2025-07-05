import { Request, Response } from "express";
import userModel from "../models/userModel";

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, mobileNo, password, verificationCode, role } =
      req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const user = await userModel.create({
      name,
      email,
      mobileNo,
      password,
      verificationCode,
      role: role || "user",
    });

    res
      .status(201)
      .json({ status: 201, message: "User registered successfully", user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const userController = {
  registerUser,
};
