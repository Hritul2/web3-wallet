import { Button } from "../ui/button";
import { getFormattedDateTime } from "@/lib/generateDate";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { validateMnemonicWords } from "@/lib/web3_computations";
import { useSetRecoilState } from "recoil";
import { mnemonicAtom } from "@/store/atoms";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const ImportButton = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
}) => {
  const { toast } = useToast();
  const setMnemonic = useSetRecoilState(mnemonicAtom);

  const handleImportClick = () => {
    const mnemonic = inputValue.trim().toLowerCase();

    if (validateMnemonicWords(mnemonic)) {
      setMnemonic(mnemonic); // Set valid mnemonic in the state
      setInputValue(""); // Clear input field
      const now = getFormattedDateTime();

      toast({
        title: "Seed phrase imported",
        description: `${now}`,
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    } else {
      // Trigger dialog for invalid mnemonic
      setShowInvalidDialog(true);
    }
  };

  const [showInvalidDialog, setShowInvalidDialog] = useState(false);

  return (
    <>
      <Button className="text-lg" onClick={handleImportClick}>
        Import Key
      </Button>

      {/* Invalid Seed Phrase Dialog */}
      <AlertDialog open={showInvalidDialog} onOpenChange={setShowInvalidDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid Seed Phrase</AlertDialogTitle>
            <AlertDialogDescription>
              The seed phrase you entered is invalid. Please ensure you have
              entered a valid 12- or 24-word seed phrase and try again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setShowInvalidDialog(false);
                setInputValue("");
              }}
            >
              Try Again
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ImportButton;
