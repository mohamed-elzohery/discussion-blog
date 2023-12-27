"use server";
import { signIn, signOut } from "@/auth";

export const signin = async () => {
  return signIn("github");
};
