import { createCheckInRequest, getStreakRequest } from './checkins';
import { createHabitRequest, getHabitRequest } from './habits';
import { getLeaderboardQuery, getScoreRequest } from './leaderboard';
import { createClaimRewardRequest, getRewardRequest } from './rewards';
import type {
  HabitInput,
  LeaderboardQuery,
  PublicCallRequest,
  ReadOnlyCallRequest,
  StreakBitClientOptions,
} from './types';
import { resolveContracts } from './utils';

export class StreakBitClient {
  readonly options: StreakBitClientOptions;

  constructor(options: StreakBitClientOptions) {
    this.options = options;
  }

  async createHabit(
    name: string,
    frequency: number,
    stake: number,
    description = ''
  ): Promise<PublicCallRequest> {
    const input: HabitInput = { name, description, frequency, stake };
    return createHabitRequest(this.options, resolveContracts(this.options), input);
  }

  async getHabit(habitId: number): Promise<ReadOnlyCallRequest> {
    return getHabitRequest(this.options, resolveContracts(this.options), habitId);
  }

  async checkIn(habitId: number): Promise<PublicCallRequest> {
    return createCheckInRequest(this.options, resolveContracts(this.options), habitId);
  }

  async getStreak(habitId: number, userAddress?: string): Promise<ReadOnlyCallRequest> {
    return getStreakRequest(
      this.options,
      resolveContracts(this.options),
      habitId,
      userAddress
    );
  }

  async claimReward(habitId: number): Promise<PublicCallRequest> {
    return createClaimRewardRequest(
      this.options,
      resolveContracts(this.options),
      habitId
    );
  }

  async getReward(habitId: number, userAddress?: string): Promise<ReadOnlyCallRequest> {
    return getRewardRequest(
      this.options,
      resolveContracts(this.options),
      habitId,
      userAddress
    );
  }

  async getScore(userAddress?: string): Promise<ReadOnlyCallRequest> {
    return getScoreRequest(this.options, resolveContracts(this.options), userAddress);
  }

  async getLeaderboard(
    limit = 10,
    period: '7d' | '30d' | 'all-time' = 'all-time'
  ): Promise<LeaderboardQuery> {
    return getLeaderboardQuery(
      this.options,
      resolveContracts(this.options),
      limit,
      period
    );
  }
}
