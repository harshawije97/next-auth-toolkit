"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import SocialLogins from "./social-logins";

interface CardWrapperProps {
  children: React.ReactNode | React.ReactNode[];
  headerLabel: string;
  backButtonLabel: string;
  backButtonLink: string;
  isSocial?: boolean;
}

function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonLink,
  isSocial,
}: CardWrapperProps) {
  return (
    <Card className="min-w-[320px] md:w-[500px] space-y-4">
      <CardHeader className="w-full flex flex-row justify-between items-start space-y-0">
        <div className="w-full flex flex-col justify-center items-center">
          <CardTitle className="text-3xl">{headerLabel}</CardTitle>
          <p>Welcome back 👋</p>
        </div>
        <Button variant={"ghost"} className="m-0">
          <HelpCircle className="h-6 w-6 text-slate-400" />
        </Button>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full flex flex-col gap-y-4 items-center">
        {isSocial && <SocialLogins />}
        <Link
          href={backButtonLink}
          className="gap-x-2 flex items-center hover:underline text-sm mt-3"
        >
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
