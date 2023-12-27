"use server";
import { signOut } from "@/auth";

export const signout = async () => {
  return signOut();
};
