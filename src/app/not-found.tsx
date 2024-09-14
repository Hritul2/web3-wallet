import React from "react";
import { RadiobuttonIcon as Radio } from "@radix-ui/react-icons";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[75vh] p-6 md:p-12 gap-10">
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-center">
        404 | Not Found
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-4 text-primary/90 hover:text-primary hover:underline text-2xl sm:text-3xl font-semibold transition-colors duration-200 ease-in-out"
      >
        <Radio className="h-10 w-10 sm:h-12 sm:w-12" />
        Back to Wallet
      </Link>
    </div>
  );
};

export default NotFound;
