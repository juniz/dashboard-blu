import ApplicationLogo from "@/Components/ApplicationLogo";
import { ModeToggle } from "@/Components/mode-toggle";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Login({ children }: PropsWithChildren) {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="container flex h-16 items-center px-4 gap-2">
          <img src="/images/logo.png" alt="logo" className="w-10" />
          <h5 className="font-bold">RS BHAYANGKARA NGANJUK</h5>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
