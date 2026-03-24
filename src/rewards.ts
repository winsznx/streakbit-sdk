import type { ContractSet, PublicCallRequest, ReadOnlyCallRequest, StreakBitClientOptions } from './types';
import { assertSenderAddress, createPublicCall, createReadOnlyCall } from './utils';

export function createClaimRewardRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  habitId: number
): PublicCallRequest {
  return createPublicCall(
    options.network,
    contracts.rewardDistributor,
    'claim-reward',
    [habitId],
    options.senderAddress
  );
}

export function getRewardRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  habitId: number,
  userAddress?: string
): ReadOnlyCallRequest {
  const sender = assertSenderAddress(
    userAddress ?? options.senderAddress,
    'query reward data'
  );

  return createReadOnlyCall(
    options.network,
    contracts.rewardDistributor,
    'get-reward',
    [sender, habitId],
    sender
  );
}
