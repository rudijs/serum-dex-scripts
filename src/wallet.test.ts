import { wallet } from "./wallet"

describe("wallet", () => {
  test("#wallet should return a solana account", async () => {
    // real seed phrase, but emtpy wallet of course
    const mnemonic = "grace pioneer opinion brief plug train machine ancient actress focus census sad"

    const account = await wallet(mnemonic)
    // console.log(res)
    console.log(account.publicKey.toString())

    expect(account.publicKey.toString()).toEqual("3aGjDfsYzLXEY3BfggCk11JaWLi5Af3WVVPeBX5PqQp9")
  })
})
