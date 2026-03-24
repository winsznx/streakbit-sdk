import assert from 'node:assert/strict';
import test from 'node:test';

import { StreakBitClient } from '../src/index';

test('checkIn builds a check-in-manager public call', async () => {
  const client = new StreakBitClient({
    network: 'testnet',
    senderAddress: 'ST000000000000000000002AMW42H',
  });

  const request = await client.checkIn(8);

  assert.equal(request.contractName, 'check-in-manager');
  assert.equal(request.functionName, 'check-in');
  assert.deepEqual(request.args, [8]);
});

test('getStreak builds a read-only request', async () => {
  const client = new StreakBitClient({
    network: 'testnet',
    senderAddress: 'ST000000000000000000002AMW42H',
  });

  const request = await client.getStreak(8);

  assert.equal(request.type, 'read-only');
  assert.equal(request.contractName, 'check-in-manager');
  assert.deepEqual(request.args, ['ST000000000000000000002AMW42H', 8]);
});
