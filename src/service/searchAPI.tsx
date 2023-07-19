import axios, { AxiosError, AxiosInstance } from 'axios';
import {
  checkCachedResponse,
  setCacheStorage,
} from '../utils/localCacheStorage';

export const BASE_URL = 'https://json-server-vercel-gamangee.vercel.app/';
const API_URL = '/sick?q=';
const ERROR_MESSAGE = '오류가 발생했습니다.';

export interface SickNmListProps {
  sickCd: string;
  sickNm: string;
}

type ErrorResponse = {
  message: string;
};

class searchSickNmAPI {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
    });
  }
  async getSickNmList(searchKeyword: string) {
    if (searchKeyword === '') return [];

    const completeApiUrl = `${API_URL}${searchKeyword}`;

    const cacheRes = await checkCachedResponse(completeApiUrl);
    if (cacheRes) {
      const cacheData = await cacheRes.json();
      return cacheData.filter((item: SickNmListProps) =>
        item.sickNm.startsWith(searchKeyword)
      );
    }

    try {
      const { data } = await this.axiosInstance.get(completeApiUrl);
      console.info('calling api');
      setCacheStorage(completeApiUrl, data);

      return data.filter((item: SickNmListProps) =>
        item.sickNm.startsWith(searchKeyword)
      );
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      alert(axiosError.response?.data.message || ERROR_MESSAGE);
      return [];
    }
  }
}

export const searchSickNmListAPI = new searchSickNmAPI();
