import { RadiobuttonIcon as Radio } from "@radix-ui/react-icons";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 sm:py-6 sm:px-8 bg-background">
      <Link href={"/"} className="flex items-center space-x-4">
        <Radio className="h-6 w-6 sm:h-8 sm:w-8" />
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Web3 Wallet
        </h1>
      </Link>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
