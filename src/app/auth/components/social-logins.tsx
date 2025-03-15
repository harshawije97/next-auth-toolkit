"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";

function SocialLogins() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-x-4 md:px-2">
      <Button variant={"outline"} size={"lg"} className="w-full">
        Google
      </Button>
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-full"
        onClick={() => signIn("github", { callbackUrl: "https://next-auth-toolkit-omega.vercel.app/api/auth/callback/github" })}
      >
        GitHub
      </Button>
    </div>
  );
}

export default SocialLogins;
