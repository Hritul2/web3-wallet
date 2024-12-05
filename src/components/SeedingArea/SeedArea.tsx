"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { InputArea } from "./SeedInput";
import { GenerateButton } from "./GenerateButton";
import ImportButton from "./ImportButton";

const SeedArea = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Card className="w-full bg-background border-none">
      <div className="w-full flex justify-between items-center px-4">
        <CardHeader className="items-start">
          <CardTitle className="text-2xl">Secret Recovery Phrase</CardTitle>
          <CardDescription className="text-lg">
            Save these words in a safe place.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between items-center p-0">
          {inputValue ? (
            <ImportButton
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          ) : (
            <GenerateButton />
          )}
        </CardFooter>
      </div>
      <CardContent className="flex gap-2">
        <InputArea inputValue={inputValue} setInputValue={setInputValue} />
      </CardContent>
    </Card>
  );
};

export default SeedArea;
