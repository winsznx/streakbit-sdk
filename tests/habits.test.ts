import assert from 'node:assert/strict';
import test from 'node:test';

import { StreakBitClient } from '../src/index';

test('createHabit builds a habit-registry contract call', async () => {
  const client = new StreakBitClient({
    network: 'mainnet',
    senderAddress: 'SP000000000000000000002Q6VF78',
  });

  const request = await client.createHabit('Deep Work', 7, 10, 'Morning focus block');

  assert.equal(request.contractName, 'habit-registry');
  assert.equal(request.functionName, 'create-habit');
  assert.deepEqual(request.args, ['Deep Work', 'Morning focus block', 7, 10]);
});
