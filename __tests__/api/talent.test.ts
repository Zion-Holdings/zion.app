import axios from 'axios';
import { getAllTalent, getTalentBySlug } from '@/api/talent';
import { TALENT_PROFILES } from '@/data/talentData'; // Using actual data for comparison
import { vi, describe, it, expect, afterEach, type MockedObject, type MockInstance } from 'vitest';
import type { AxiosStatic, AxiosError } from 'axios';


// Mock axios
vi.mock('axios', async () => {
  const actualAxios = await vi.importActual<AxiosStatic>('axios');
  return {
    ...actualAxios,
    get: vi.fn(),
    // Provide a type-safe mock for isAxiosError
    isAxiosError: (payload: any): payload is AxiosError => {
      return actualAxios.isAxiosError(payload);
    },
  };
});

const mockedAxios = axios as MockedObject<AxiosStatic>;

describe('Talent API functions', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('getAllTalent', () => {
    it('should fetch all talent profiles', async () => {
      const mockResponse = { data: { profiles: TALENT_PROFILES } };
      (mockedAxios.get as MockInstance<any, any>).mockResolvedValueOnce(mockResponse);

      const profiles = await getAllTalent();

      expect(mockedAxios.get).toHaveBeenCalledWith('/api/talent');
      expect(profiles).toEqual(TALENT_PROFILES);
    });

    it('should throw an error if the API call fails', async () => {
      const errorMessage = 'Network Error';
      (mockedAxios.get as MockInstance<any, any>).mockRejectedValueOnce(new Error(errorMessage));

      await expect(getAllTalent()).rejects.toThrow(errorMessage);
    });
  });

  describe('getTalentBySlug', () => {
    const mockProfile = TALENT_PROFILES[0];
    const slug = mockProfile.id;

    it('should fetch a talent profile by slug', async () => {
      const mockResponse = { data: { profile: mockProfile } };
      (mockedAxios.get as MockInstance<any, any>).mockResolvedValueOnce(mockResponse);

      const profile = await getTalentBySlug(slug);

      expect(mockedAxios.get).toHaveBeenCalledWith(`/api/talent/${slug}`);
      expect(profile).toEqual(mockProfile);
    });

    it('should return null if the profile is not found (404)', async () => {
      const axiosError = {
        isAxiosError: true,
        response: { status: 404 },
      } as AxiosError; // Cast to AxiosError
      (mockedAxios.get as MockInstance<any, any>).mockRejectedValueOnce(axiosError);

      const profile = await getTalentBySlug('non-existent-slug');

      expect(mockedAxios.get).toHaveBeenCalledWith('/api/talent/non-existent-slug');
      expect(profile).toBeNull();
    });

    it('should throw an error if the API call fails for other reasons', async () => {
      const errorMessage = 'Server Error';
      const axiosError = {
        isAxiosError: true,
        response: { status: 500 },
        message: errorMessage,
      } as AxiosError; // Cast to AxiosError
      (mockedAxios.get as MockInstance<any, any>).mockRejectedValueOnce(axiosError);

      await expect(getTalentBySlug(slug)).rejects.toEqual(axiosError);
    });

     it('should throw an error if a non-Axios error occurs', async () => {
      const errorMessage = 'Unexpected error';
      (mockedAxios.get as MockInstance<any, any>).mockRejectedValueOnce(new Error(errorMessage));

      await expect(getTalentBySlug(slug)).rejects.toThrow(errorMessage);
    });
  });
});
