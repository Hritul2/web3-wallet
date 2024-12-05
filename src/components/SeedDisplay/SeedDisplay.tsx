"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { EyeClosedIcon, EyeOpenIcon, CopyIcon } from "@radix-ui/react-icons";
import { useToast } from "@/hooks/use-toast";
import { useRecoilState } from "recoil";
import { mnemonicAtom } from "@/store/atoms";
import OneWord from "./OneWord";
import ClearSeed from "./ClearSeed";
import GotoWalletButton from "./GotoWalletButton";

const SeedDisplay = () => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [mnemonic, setMnemonic] = useRecoilState(mnemonicAtom);
  const mnemonicWords = mnemonic.split(" ");
  const { toast } = useToast();

  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      if (!eyeOpen) {
        e.preventDefault();
        toast({
          variant: "destructive",
          title: "Copying is disabled when the seed phrase is hidden.",
          description:
            "Please reveal the seed phrase to copy it, or use the copy button.",
        });
      }
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, [eyeOpen]);

  return (
    <Card className="w-full max-w-4xl bg-background border p-4 sm:p-6 lg:p-8 mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-center">
          Your Seed Phrase
        </CardTitle>
        <CardDescription className="text-sm sm:text-base lg:text-lg text-center">
          Make sure to keep the seed phrase safe. Once you move away from this
          page, you cannot view the seed again.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 w-full ${
            eyeOpen ? "" : "blur-[6px]"
          }`}
          onDoubleClick={() => setEyeOpen(!eyeOpen)}
        >
          {mnemonicWords.map((word, index) => (
            <OneWord key={index} word={word} />
          ))}
        </div>
        <Button
          onClick={() => setEyeOpen(!eyeOpen)}
          className="mt-4 sm:mt-0"
          aria-label="Toggle seed visibility"
        >
          {eyeOpen ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
        <ClearSeed />
        <Button
          className="rounded-lg p-4 w-full sm:w-auto flex items-center justify-center gap-2"
          onClick={() => {
            if (
              navigator.clipboard &&
              typeof navigator.clipboard.writeText === "function"
            ) {
              navigator.clipboard
                .writeText(mnemonic)
                .then(() =>
                  toast({
                    title: "Seed phrase copied",
                    description: "Seed phrase copied to clipboard",
                  })
                )
                .catch(() =>
                  toast({
                    variant: "destructive",
                    title: "Failed to copy seed phrase",
                    description:
                      "Browser does not support copying to clipboard",
                  })
                );
            }
          }}
        >
          <CopyIcon />
          Copy Seed Phrase
        </Button>
      </CardFooter>
      <GotoWalletButton />
    </Card>
  );
};

export default SeedDisplay;
