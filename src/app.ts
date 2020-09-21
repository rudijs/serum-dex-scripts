import { Connection } from "@solana/web3.js"
import { MARKETS, Market } from "@project-serum/serum"
import { wallet } from "./wallet"

if (!process.env.MNEMONIC) throw "Missing required Env var: MNEMONIC"

const fttUsdc = MARKETS.filter((item: any) => item.name === "FTT/USDC")[0]
// console.log(fttUsdc)

let connection = new Connection("https://api.mainnet-beta.solana.com/")

async function main() {
  let owner = await wallet(process.env.MNEMONIC!)

  let market = await Market.load(connection, fttUsdc.address, undefined, fttUsdc.programId)
  // console.log(market)

  // Fetching orderbooks
  let bids = await market.loadBids(connection)

  // L2 orderbook data
  for (let [price, size] of bids.getL2(20)) {
    console.log(price, size)
  }

  // Retrieving open orders by owner
  // console.log(owner.publicKey.toString())
  let myOrders = await market.loadOrdersForOwner(connection, owner.publicKey)
  // console.log(myOrders)

  for (let order of myOrders) {
    console.log(order)
  }
}

main()
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
