import z from "zod";

// Schema for mnemonic validation
// Allows a string with exactly 12 words or null
export const mnemonicZ = z.string().refine(
  (value) => {
    if (value === null) return true; // If null, pass validation
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount === 12; // Ensure there are exactly 12 words in the mnemonic
  },
  {
    message: "Mnemonic must be either null or a string with exactly 12 words", // Custom error message
  }
);

// Inferred TypeScript type for mnemonicZ schema
export type MnemonicType = z.infer<typeof mnemonicZ>;

// Schema for individual wallet object
const walletTypeZ = z.object({
  id: z.number(), // Wallet ID as a number
  name: z.string(), // Wallet name as a string
  pubKey: z.string(), // Public key as a string
  privKey: z.string(), // Private key as a string
});

// Inferred TypeScript type for walletTypeZ schema
export type WalletType = z.infer<typeof walletTypeZ>;

// Schema for an array of wallets
const walletArrayZ = z.array(walletTypeZ);

// Inferred TypeScript type for walletArrayZ schema (array of wallets)
export type WalletListType = z.infer<typeof walletArrayZ>;

// Schema for an array of different wallet types (bit, eth, sol) with corresponding wallets
const allWalletsArrayZ = z.object({
  bit: z.array(walletTypeZ),
  eth: z.array(walletTypeZ),
  sol: z.array(walletTypeZ),
});

// Inferred TypeScript type for allWalletsArrayZ schema
export type AllWalletsArrayType = z.infer<typeof allWalletsArrayZ>;

// Schema for an active wallet object
// Indicates the type of wallet and its corresponding wallet ID
const activeWalletZ = z.object({
  type: z.enum(["bit", "eth", "sol"]), // Enum for wallet type
  walletID: z.number(), // Wallet ID as a number
});

// Inferred TypeScript type for activeWalletZ schema
export type ActiveWalletType = z.infer<typeof activeWalletZ>;

// Schema for an eye-open wallet (nullable)
// Same structure as activeWalletZ, but allows null values
const eyeOpenWalletZ = z
  .object({
    type: z.enum(["bit", "eth", "sol"]), // Enum for wallet type
    walletID: z.number(), // Wallet ID as a number
  })
  .nullable(); // The object can be null

// Inferred TypeScript type for eyeOpenWalletZ schema
export type EyeOpenWalletType = z.infer<typeof eyeOpenWalletZ>;
