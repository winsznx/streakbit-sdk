# streakbit-sdk

`@winsznx/streakbit-sdk` is a lightweight TypeScript SDK for the StreakBit habit and streak protocol.

The current SDK is descriptor-first: it builds structured contract call requests that can be passed into a Stacks wallet adapter, contract runner, or custom transport layer.

## Install

```bash
pnpm add @winsznx/streakbit-sdk
```

## Usage

```ts
import { StreakBitClient } from '@winsznx/streakbit-sdk';

const client = new StreakBitClient({
  network: 'mainnet',
  senderAddress: 'SP000000000000000000002Q6VF78',
});

const createHabitCall = await client.createHabit('Deep Work', 7, 10, 'Morning focus block');
const checkInCall = await client.checkIn(1);
const streakQuery = await client.getStreak(1);
const rewardClaimCall = await client.claimReward(1);
const leaderboardQuery = await client.getLeaderboard(10);
```

## What the client returns

- Public write helpers return contract call descriptors
- Read helpers return read-only call descriptors
- Leaderboard helpers return structured query descriptors

This keeps the SDK easy to integrate with different Stacks execution environments without hardcoding a single wallet or network client.
