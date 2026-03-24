import type { ContractSet, PublicCallRequest, ReadOnlyCallRequest, StreakBitClientOptions } from './types';
import { assertSenderAddress, createPublicCall, createReadOnlyCall } from './utils';

export function createCheckInRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  habitId: number
): PublicCallRequest {
  return createPublicCall(
    options.network,
    contracts.checkInManager,
    'check-in',
    [habitId],
    options.senderAddress
  );
}

export function getStreakRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  habitId: number,
  userAddress?: string
): ReadOnlyCallRequest {
  const sender = assertSenderAddress(
    userAddress ?? options.senderAddress,
    'query streak data'
  );

  return createReadOnlyCall(
    options.network,
    contracts.checkInManager,
    'get-streak',
    [sender, habitId],
    sender
  );
}
