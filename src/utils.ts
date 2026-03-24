import type {
  ContractDefinition,
  ContractName,
  ContractSet,
  PublicCallRequest,
  ReadOnlyCallRequest,
  StreakBitClientOptions,
  StreakBitNetwork,
} from './types';

const DEFAULT_CONTRACT_ADDRESS = 'SP000000000000000000002Q6VF78';

function contract(address: string, name: ContractName): ContractDefinition {
  return { address, name };
}

export function resolveContracts(options: StreakBitClientOptions): ContractSet {
  const address = options.contractAddress ?? DEFAULT_CONTRACT_ADDRESS;

  return {
    habitRegistry: contract(address, 'habit-registry'),
    checkInManager: contract(address, 'check-in-manager'),
    rewardDistributor: contract(address, 'reward-distributor'),
    penaltyHandler: contract(address, 'penalty-handler'),
    leaderboard: contract(address, 'leaderboard'),
  };
}

export function assertSenderAddress(
  senderAddress: string | undefined,
  context: string
): string {
  if (!senderAddress) {
    throw new Error(`senderAddress is required to ${context}.`);
  }

  return senderAddress;
}

export function createPublicCall(
  network: StreakBitNetwork,
  contractRef: ContractDefinition,
  functionName: string,
  args: ReadonlyArray<string | number | boolean>,
  senderAddress?: string
): PublicCallRequest {
  return {
    type: 'public',
    network,
    contractAddress: contractRef.address,
    contractName: contractRef.name,
    functionName,
    args,
    senderAddress,
  };
}

export function createReadOnlyCall(
  network: StreakBitNetwork,
  contractRef: ContractDefinition,
  functionName: string,
  args: ReadonlyArray<string | number | boolean>,
  senderAddress: string
): ReadOnlyCallRequest {
  return {
    type: 'read-only',
    network,
    contractAddress: contractRef.address,
    contractName: contractRef.name,
    functionName,
    args,
    senderAddress,
  };
}
