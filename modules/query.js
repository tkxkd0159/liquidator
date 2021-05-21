import got from "got";

const URL = "https://api.compound.finance/api/v2/account";
const params = {
  network: "mainnet",
  "max_health[value]": "1.0",
  page_number: 1,
};
const searchParams = new URLSearchParams(params);

async function myRes(url) {
  const res = await got(url, { searchParams });
  return res.body;
}

function getTotalEntry(resBody) {
  let compDb = JSON.parse(resBody);
  let totalNum = compDb.pagination_summary.total_entries;

  return totalNum;
}

myRes(URL, searchParams);
let AccountResponse = await myRes(URL, searchParams);
const totalNum = getTotalEntry(AccountResponse);

export { totalNum };

// const response = await got('https://api.compound.finance/api/v2/account?page_size=20&page_number=2')
//   const response = await got(
//     `https://api.compound.finance/api/v2/account?addresses[]=${addrList[0]}&addresses[]=${addrList[1]}`
//   );
