import assert from 'node:assert/strict';
import test from 'node:test';

import { StreakBitClient } from '../src/index';

test('claimReward builds a reward-distributor call', async () => {
  const client = new StreakBitClient({
    network: 'mainnet',
    senderAddress: 'SP000000000000000000002Q6VF78',
  });

  const request = await client.claimReward(4);

  assert.equal(request.contractName, 'reward-distributor');
  assert.equal(request.functionName, 'claim-reward');
  assert.deepEqual(request.args, [4]);
});

test('getLeaderboard returns a leaderboard query descriptor', async () => {
  const client = new StreakBitClient({
    network: 'mainnet',
    senderAddress: 'SP000000000000000000002Q6VF78',
  });

  const request = await client.getLeaderboard(25, '30d');

  assert.equal(request.type, 'leaderboard-query');
  assert.equal(request.contractName, 'leaderboard');
  assert.equal(request.limit, 25);
  assert.equal(request.period, '30d');
});
