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

const GotoWalletButton = () => {
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
          <AlertDialogCancel>Generate 12-Word Seed</AlertDialogCancel>
          <AlertDialogAction>Generate 24-Word Seed</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GotoWalletButton;
