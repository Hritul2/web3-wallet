"use client";
import SeedArea from "@/components/SeedingArea/SeedArea";
import { mnemonicAtom } from "@/store/atoms";
import { useRecoilValue } from "recoil";
import SeedDisplay from "@/components/SeedDisplay/SeedDisplay";

const Page = () => {
  const mnemonic = useRecoilValue(mnemonicAtom);
  return (
    <div className="relative flex flex-col items-center justify-start min-h-[75vh] p-4 gap-4 w-full">
      {mnemonic.length === 0 ? (
        <SeedArea />
      ) : (
        <>
          <SeedDisplay />
        </>
      )}
    </div>
  );
};

export default Page;
