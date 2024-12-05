import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { Wallet, HDNodeWallet } from "ethers";
import { MnemonicType } from "@/types/types";

export const generateMnemonicWords = (numberOfWords: 12 | 24) => {
  if (numberOfWords === 12) {
    return generateMnemonic(128);
  }
  return generateMnemonic(256);
};
export const validateMnemonicWords = (mnemonic: MnemonicType) => {
  return validateMnemonic(mnemonic);
};

export const generateSolanaKeys = (
  mnemonic: MnemonicType,
  solWalletIndex: number
): { publicKey: string; privateKey: string } => {
  const seed = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/501'/${solWalletIndex}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);

  return {
    publicKey: keypair.publicKey.toBase58(), // Use Base58 for public key
    privateKey: bs58.encode(keypair.secretKey), // Base58 encoding for private key
  };
};

// export const validateYourSolanaKeys = (publicKey: string) => {
//   const key = new PublicKey(publicKey);
//   return PublicKey.isOnCurve(key.toBytes());
// };

export const generateEthereumKeys = (
  mnemonic: MnemonicType,
  ethereumWalletIndex: number
): { publicKey: string; privateKey: string } => {
  const seed = mnemonicToSeedSync(mnemonic);
  const path = `m/44'/60'/${ethereumWalletIndex}'/0/0`; // Correct path for Ethereum wallets
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(path);
  const wallet = new Wallet(child.privateKey);
  return {
    publicKey: wallet.address,
    privateKey: wallet.privateKey,
  };
};
