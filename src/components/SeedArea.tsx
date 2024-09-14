"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Toggle } from "./ui/toggle";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const SeedArea = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle between showing/hiding password

  return (
    <Card className="w-full bg-background/80">
      <div className="w-full  flex justify-between items-center px-4">
        <CardHeader className="items-start">
          <CardTitle className="text-3xl">Secret Recovery Phrase</CardTitle>
          <CardDescription className="text-lg">
            Save these words in a safe place.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between items-center p-0">
          <Button className="w-42">Generate Key</Button>
        </CardFooter>
      </div>
      <CardContent className="flex gap-2">
        <Input
          placeholder="If you already have a seed phrase, enter here."
          type={showPassword ? "text" : "password"} // Toggle between text and password types
        />
        <Toggle
          variant="outline"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </Toggle>
      </CardContent>
    </Card>
  );
};

export default SeedArea;
