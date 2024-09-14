import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[75vh] p-4 md:p-12">
      <h1 className="tracking-tighter text-4xl sm:text-5xl md:text-6xl text-center">
        We support multiple blockchains
      </h1>
      <p className="text-primary/90 font-semibold text-lg sm:text-2xl md:text-3xl text-center mt-4">
        Choose a blockchain to get started.
      </p>
      <Link href={"/wallet"} className="">
        <DoubleArrowDownIcon className="absolute bottom-10 w-10 h-10 sm:w-14 sm:h-14 text-primary/90 animate-bounce hover:bg-secondary/80 rounded-full p-2" />
      </Link>
    </div>
  );
}
