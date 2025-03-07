"use client";

import { Button } from "@/components/ui/button";
import React from "react";

function SocialLogins() {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-x-4 md:px-2">
      <Button variant={"outline"} size={"lg"} className="w-full">Google</Button>
      <Button variant={"outline"} size={"lg"} className="w-full">GitHub</Button>
    </div>
  );
}

export default SocialLogins;
