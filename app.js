import dotenv from "dotenv";
import fs from "fs-extra";
import got from "got";
import Compound from "@compound-finance/compound-js";

import { totalNum} from "./modules/query.js";

const params = {
  network: "mainnet",
  "max_health[value]": "1.0",
  page_size: totalNum,
};
let searchParams = new URLSearchParams(params);


// dotenv.config()

// var compound = new Compound('https://ropsten.infura.io/v3/d1d5cddfa64244f68b1c0359d22a5491', {
//   privateKey: process.env.PRIVATE_KEY, // preferably with environment variable
// });


(async () => {

  const response = await got(
    'https://api.compound.finance/api/v2/account', {searchParams}
  );

  try {
    fs.writeJsonSync("./accounts.json", JSON.parse(response.body).accounts);
  } catch (err) {
    console.error(err);
  }

})();
