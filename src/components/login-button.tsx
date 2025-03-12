/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface LoginButtonProps {
  children: React.ReactNode | React.ReactNode[];
  variant: "model" | "redirect";
  asChild?: boolean;
}

function LoginButton({ children, variant, asChild }: LoginButtonProps) {
  const onSubmitModel = () => {
    console.log("model triggered");
  };

  if (variant === "model") {
    return (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <a href="/auth/sign-in">{children}</a>
    </>
  );
}

export default LoginButton;
