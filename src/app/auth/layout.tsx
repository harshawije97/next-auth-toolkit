import React from "react";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      {children}
    </div>
  );
}

export default AuthLayout;
