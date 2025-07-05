export interface IUser {
  name: string;
  email: string;
  mobileNo: string;
  password: string;
  verificationCode: string;
  role?: "user" | "admin";
}
