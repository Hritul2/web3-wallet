import { atom, selector } from "recoil";
import {
  AllWalletsArrayType,
  ActiveWalletType,
  EyeOpenWalletType,
  MnemonicType,
} from "@/types/types";

export const mnemonicAtom = atom<MnemonicType>({
  key: "mnemonic",
  default: "",
});

export const walletArrayAtom = atom<AllWalletsArrayType>({
  key: "walletArrayAtom",
  default: {
    bit: [],
    eth: [],
    sol: [],
  },
});

export const activeWalletAtom = atom<ActiveWalletType>({
  key: "activeWalletAtom",
  default: { type: "bit", walletID: 0 },
});

export const eyeOpenWalletAtom = atom<EyeOpenWalletType>({
  key: "eyeOpenWalletAtom",
  default: null,
});
