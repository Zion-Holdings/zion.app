# Token Balances / Transfers API

## GET /tokens/zion/balances/{address}
Return ZION$ balances and staking info.

```json
{
  "address": "0x...",
  "balance": "12345.67",
  "staked": "5000",
  "rewardsAccrued": "123.4"
}
```

## POST /tokens/transfer
Transfer tokens (offchain relay or onchain helper).

```json
{ "to": "0x...", "amount": "250", "memo": "thanks" }
```