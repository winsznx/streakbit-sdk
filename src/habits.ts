import type { ContractSet, HabitInput, PublicCallRequest, ReadOnlyCallRequest, StreakBitClientOptions } from './types';
import { assertSenderAddress, createPublicCall, createReadOnlyCall } from './utils';

export function createHabitRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  input: HabitInput
): PublicCallRequest {
  return createPublicCall(
    options.network,
    contracts.habitRegistry,
    'create-habit',
    [input.name, input.description ?? '', input.frequency, input.stake],
    options.senderAddress
  );
}

export function getHabitRequest(
  options: StreakBitClientOptions,
  contracts: ContractSet,
  habitId: number
): ReadOnlyCallRequest {
  const sender = assertSenderAddress(options.senderAddress, 'read habit data');

  return createReadOnlyCall(
    options.network,
    contracts.habitRegistry,
    'get-habit',
    [habitId],
    sender
  );
}
