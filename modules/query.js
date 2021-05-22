import got from "got";

const URL = "https://api.compound.finance/api/v2/account";

async function myRes(url) {
  const params = {
    network: "mainnet",
    "max_health[value]": "1.0",
    page_number: 1,
  };
  const searchParams = new URLSearchParams(params);

  const res = await got(url, { searchParams });
  return res.body;
}

function getTotalEntry(resBody) {
  let compDb = JSON.parse(resBody);
  let totalNum = compDb.pagination_summary.total_entries;

  return totalNum;
}

let AccountResponse = await myRes(URL);
const totalNum = getTotalEntry(AccountResponse);

export { totalNum };