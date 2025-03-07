"use client";

import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message: string | undefined;
}

function FormSuccess({ message }: FormSuccessProps) {
  return (
    <>
      {message && (
        <div className="w-full flex flex-row gap-x-3 items-center text-teal-500 p-4 rounded-md bg-teal-50 font-medium">
          <CheckCircledIcon className="h-5 w-5" />
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default FormSuccess;
