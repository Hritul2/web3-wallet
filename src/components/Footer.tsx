import Link from "next/link";
import { GitHubLogoIcon as GithubIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm font-semibold">© 2024 Web3 Wallet</p>
        <Link href={"https://github.com/Hritul2"} target="_blank">
          <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary/90 hover:text-primary" />
        </Link>
        <p className="text-sm font-semibold">Made by Hritul</p>
      </div>
    </footer>
  );
};

export default Footer;
