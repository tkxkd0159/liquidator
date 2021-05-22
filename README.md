# liquidator
Compound Liquidator

```js
const response = await got(
  "https://api.compound.finance/api/v2/account?page_size=20&page_number=2"
);
const response = await got(
  `https://api.compound.finance/api/v2/account?addresses[]=${addrList[0]}&addresses[]=${addrList[1]}`
);
```