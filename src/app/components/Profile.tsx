"use client";
import { useSession } from "next-auth/react";
import React from "react";

function Profile() {
  const session = useSession();
  if (session.data?.user) return <div>client: signed in</div>;
  return <div>client: signed out</div>;
}

export default Profile;
