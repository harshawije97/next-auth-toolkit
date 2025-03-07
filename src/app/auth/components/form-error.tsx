"use client";

import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message: string | undefined;
}

function FormError({ message }: FormErrorProps) {
  return (
    <>
      {message && (
        <div className="w-full flex flex-row gap-x-3 items-center text-red-500 p-4 rounded-md bg-red-50 font-medium">
          <ExclamationTriangleIcon className="h-5 w-5" />
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default FormError;
