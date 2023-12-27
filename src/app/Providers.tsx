"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

export interface HasChildren {
  children: React.ReactNode;
}

export const Providers: React.FC<HasChildren> = ({ children }) => (
  <SessionProvider>
    <NextUIProvider>{children}</NextUIProvider>
  </SessionProvider>
);
