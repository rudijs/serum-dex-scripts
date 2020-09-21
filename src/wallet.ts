import * as bip32 from "bip32"
import * as bip39 from "bip39"
import { Account } from "@solana/web3.js"
import nacl from "tweetnacl"

export const wallet = async (mnemonic: string) => {
  const seed = await bip39.mnemonicToSeed(mnemonic)
  // console.log(seed)

  const walletIndex = 0
  const accountIndex = 0

  const derivedSeed = bip32.fromSeed(seed).derivePath(`m/501'/${walletIndex}'/0/${accountIndex}`).privateKey
  // console.log(derivedSeed)

  const account = new Account(nacl.sign.keyPair.fromSeed(derivedSeed!).secretKey)
  // console.log(account.publicKey.toString())
  // console.log(account.secretKey.toString())
  return account
}
