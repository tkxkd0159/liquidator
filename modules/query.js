import got from "got";
import lodash from "lodash";

const URL = "https://api.compound.finance/api/v2/account";

const params = {
  network: "mainnet",
  "max_health[value]": "1.0",
  page_number: 1,
};

const maxHealthList = ["1.0", "0.5"];
const paramList = new Array();
for (let maxHealth of maxHealthList) {
  let newParams = lodash.cloneDeep(params)
  newParams["max_health[value]"] = maxHealth
  paramList.push(newParams)
}



async function myRes(url, paramList) {

  const resList = [];
  for (let param of paramList) {
    param = new URLSearchParams(param);
    let res = await got(url, {searchParams: param})
    resList.push(res.body)
  }

  return resList;
}

function getTotalEntry(resList) {
  let compDb = JSON.parse(resList[0]);
  let totalNum = compDb.pagination_summary.total_entries;

  return totalNum;
}


let AccountResponses = await myRes(URL, paramList);
let totalNum = getTotalEntry(AccountResponses);

export { totalNum };