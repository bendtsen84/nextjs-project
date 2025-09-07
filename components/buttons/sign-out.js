"use client";

import { signOut } from "next-auth/react";
import DynamicIcon from "../DynamicIcon";

export function SignOut() {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="text-sm cursor-pointer flex gap-2"
      >
        <DynamicIcon name="FaSignOutAlt" />
        Sign out
      </button>
    </>
  );
}
