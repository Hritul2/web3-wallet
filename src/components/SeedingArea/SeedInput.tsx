import { Input } from "../ui/input";
import { Toggle } from "../ui/toggle";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

interface InputAreaProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export const InputArea = ({ inputValue, setInputValue }: InputAreaProps) => {
  const [openEyes, setOpenEyes] = useState(false);

  return (
    <>
      <Input
        placeholder="If you have a seed phrase, enter it here. Or click 'Generate Key' to create a new one."
        type={openEyes ? "text" : "password"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Toggle variant="outline" onClick={() => setOpenEyes((prev) => !prev)}>
        {openEyes ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </Toggle>
    </>
  );
};
