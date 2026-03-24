export type StreakBitNetwork = 'mainnet' | 'testnet' | 'devnet' | 'simnet';

export type ContractName =
  | 'habit-registry'
  | 'check-in-manager'
  | 'reward-distributor'
  | 'penalty-handler'
  | 'leaderboard';

export interface ContractDefinition {
  address: string;
  name: ContractName;
}

export interface ContractSet {
  habitRegistry: ContractDefinition;
  checkInManager: ContractDefinition;
  rewardDistributor: ContractDefinition;
  penaltyHandler: ContractDefinition;
  leaderboard: ContractDefinition;
}

export interface StreakBitClientOptions {
  network: StreakBitNetwork;
  contractAddress?: string;
  senderAddress?: string;
}

export interface HabitInput {
  name: string;
  description?: string;
  frequency: number;
  stake: number;
}

export interface PublicCallRequest {
  type: 'public';
  network: StreakBitNetwork;
  contractAddress: string;
  contractName: ContractName;
  functionName: string;
  args: ReadonlyArray<string | number | boolean>;
  senderAddress?: string;
}

export interface ReadOnlyCallRequest {
  type: 'read-only';
  network: StreakBitNetwork;
  contractAddress: string;
  contractName: ContractName;
  functionName: string;
  args: ReadonlyArray<string | number | boolean>;
  senderAddress: string;
}

export interface LeaderboardQuery {
  type: 'leaderboard-query';
  network: StreakBitNetwork;
  contractAddress: string;
  contractName: 'leaderboard';
  limit: number;
  period: '7d' | '30d' | 'all-time';
}
