import { apiClient } from '../client';
import type { Stop } from 'types/models/Stop';
import type { StopsResponse } from 'types/api/response';

class StopsService {
  private static readonly BASE_PATH = '/stops';

  public async getAll(): Promise<Stop[]> {
    const response = await apiClient.get<StopsResponse>(StopsService.BASE_PATH);
    return response as unknown as Stop[];
  }
}

export const stopsService = new StopsService();
