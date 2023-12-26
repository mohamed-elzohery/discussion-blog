import { signIn, signOut } from "next-auth/react";

export const signin = async () => {
  return signIn("github");
};

export const signout = async () => {
  return signOut();
};
