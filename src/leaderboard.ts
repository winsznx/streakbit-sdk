import type { ContractSet, LeaderboardQuery, ReadOnlyCallRequest, StreakBitClientOptions } from './types';
import { assertSenderAddress, createReadOnlyCall } from './utils';

export function getScoreRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  userAddress?: string
): ReadOnlyCallRequest {
  const sender = assertSenderAddress(
    userAddress ?? options.senderAddress,
    'query leaderboard score'
  );

  return createReadOnlyCall(
    options.network,
    contracts.leaderboard,
    'get-score',
    [sender],
    sender
  );
}

export function getLeaderboardQuery(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  limit = 10,
  period: '7d' | '30d' | 'all-time' = 'all-time'
): LeaderboardQuery {
  return {
    type: 'leaderboard-query',
    network: options.network,
    contractAddress: contracts.leaderboard.address,
    contractName: 'leaderboard',
    limit,
    period,
  };
}
