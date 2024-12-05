"use client";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Toggle } from "./ui/toggle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface BlockChain {
  id: number;
  name: string;
  default?: boolean;
}

const blockChain: BlockChain[] = [
  {
    id: 1,
    name: "Bitcoin",
    default: true,
  },
  {
    id: 2,
    name: "Ethereum",
  },
  {
    id: 3,
    name: "Solana",
  },
];

const WalletTable = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-xl p-2 gap-3 flex bg-secondary">
        {blockChain.map((block: BlockChain) => (
          <span
            key={block.id}
            className={cn(
              buttonVariants({
                variant: block.default ? "default" : "secondary",
              })
            )}
          >
            {block.name}
          </span>
        ))}
      </div>

      <CardHeader>
        <CardTitle>Bitcoin</CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden">
        {" "}
        {/* Add overflow-hidden here */}
        <Table>
          <TableCaption>Keep Your Private Key Secure</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Public Key</TableHead>
              <TableHead>Private Key</TableHead>
              <TableHead className="text-right">State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Wallet 1</TableCell>
              <TableCell className="overflow-hidden">
                9YtCCYaPTirK5rBHbX3PXYfPWeXbUbpXnkfpGw1YwMSQ
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    value="3B7tcVX71gSakBhomSvggmrECnj19jUHCvaeWvdVbxN2Yoy3y2imXNEJ7tRNjd9bMKSseEzRDJachin8E6WSfoYL"
                    className="border-none bg-transparent"
                    readOnly
                  />
                  <Toggle
                    variant="outline"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </Toggle>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="secondary">Activate</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Wallet 2</TableCell>
              <TableCell className="overflow-hidden">
                9YtCCYaPTirK5rBHbX3PXYfPWeXbUbpXnkfpGw1YwMSQ
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    value="3B7tcVX71gSakBhomSvggmrECnj19jUHCvaeWvdVbxN2Yoy3y2imXNEJ7tRNjd9bMKSseEzRDJachin8E6WSfoYL"
                    className="border-none bg-transparent"
                    readOnly
                  />
                  <Toggle
                    variant="outline"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </Toggle>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="default">Active</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="w-full flex justify-between">
        <Button variant={"secondary"}>Delete Wallet</Button>
        <Button>Add Wallet</Button>
      </CardFooter>
    </div>
  );
};

export default WalletTable;
