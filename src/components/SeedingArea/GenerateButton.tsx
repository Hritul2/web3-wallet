import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useSetRecoilState } from "recoil";
import { mnemonicAtom } from "@/store/atoms";
import { generateMnemonicWords } from "@/lib/web3_computations";

export const GenerateButton = () => {
  const setMnemonic = useSetRecoilState(mnemonicAtom);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-lg">Generate Key</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Generate New Wallet Key?</AlertDialogTitle>
          <AlertDialogDescription>
            Generating a new wallet key will create a 12-word seed phrase. Make
            sure to securely store this seed phrase, as it is required to
            recover your wallet. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setMnemonic(generateMnemonicWords(12))}
          >
            Generate 12-Word Seed
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => setMnemonic(generateMnemonicWords(24))}
          >
            Generate 24-Word Seed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
