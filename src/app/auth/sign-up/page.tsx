import React from "react";
import RegisterForm from "../components/register-form";

function SignInPage() {
  return (
    <div className="container mx-auto">
      <div className="w-full h-screen flex flex-col justify-center items-center gap-y-6 md:px-16 px-8">
        <RegisterForm />
      </div>
    </div>
  );
}

export default SignInPage;
