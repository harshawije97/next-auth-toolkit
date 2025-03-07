import LoginButton from "@/components/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <div className="container mx-auto">
        <div className="w-full h-screen flex flex-col gap-y-4 md:px-16">
          <header className="w-full h-full flex flex-col justify-center items-center gap-y-2">
            <Image
              src="/shield-96.png"
              alt="logo"
              width={96}
              height={96}
              className="object-cover md:w-20 md:h-20 w-14 h-14"
            />
            <h2 className="text-white md:text-6xl text-4xl font-bold">Auth</h2>
            <p className="text-blue-700">Free service toolkit for Next.js</p>
            <div className="mt-8">
              <LoginButton variant="redirect">
                <Button variant={"secondary"}>Sign in</Button>
              </LoginButton>
            </div>
          </header>
        </div>
      </div>
    </main>
  );
}
