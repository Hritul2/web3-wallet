import { Button } from "../ui/button";
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
} from "../ui/alert-dialog";
import { TrashIcon } from "@radix-ui/react-icons";
import { useSetRecoilState } from "recoil";
import { mnemonicAtom } from "@/store/atoms";
import { useToast } from "@/hooks/use-toast";

const ClearSeed = () => {
  const { toast } = useToast();
  const setMnemonic = useSetRecoilState(mnemonicAtom);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-lg p-4 w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <TrashIcon />
          Clear Seed Phrase
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are You Sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will clear the seed phrase from the application. You
            will need to import or generate a new seed phrase to access your
            wallet.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setMnemonic("")}>
            Clear
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClearSeed;
