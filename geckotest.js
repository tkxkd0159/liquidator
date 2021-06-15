import fs from "fs-extra";
import got from "got";

// 100 calss per minutes
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const symbol_map = {
    "ethereum": "eth",
    "compound-basic-attention-token": "cBAT",
    "ccomp": "cCOMP",
    "cdai": "cDAI",
    "compound-ether": "cETH",
    "compound-augur": "cREP",
    "compound-sai": "cSAI",
    "compound-uniswap": "cUNI",
    "compound-usd-coin": "cUSDC",
    "compound-usdt": "cUSDT",
    "compound-wrapped-btc": "cWBTC",
    "compound-0x": "cZRX",
}

let ids = "";
ids.concat(',', "hello")
for (let key in symbol_map) {
    ids = ids.concat(',', key)
}

const params = {
  vs_currencies: "usd",
  ids: `${ids}`,
};

(async () => {
    await delay(1000)
    const response = await got('https://api.coingecko.com/api/v3/simple/price', {searchParams: params});

    try {

        fs.writeJsonSync("./token_prices.json", JSON.parse(response.body));
        const priceObj = fs.readJsonSync("./token_prices.json")
        console.log(priceObj['compound-sai']['usd'])
    } catch (err) {
        console.error(err);
    }

})();
