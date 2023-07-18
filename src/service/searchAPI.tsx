import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  checkCachedResponse,
  setCacheStorage,
} from '../utils/localCacheStorage';

const BASE_URL = 'http://localhost:4000';
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

    const config: AxiosRequestConfig = {
      params: {
        searchKeyword,
      },
    };

    const queryStr = new URLSearchParams(config.params).toString();
    const cacheRes = await checkCachedResponse(API_URL, queryStr);
    if (cacheRes) return await cacheRes.json();

    try {
      const { data } = await this.axiosInstance.get(
        `/sick?q=${searchKeyword}`,
        config
      );
      console.info('calling api');
      setCacheStorage(API_URL, queryStr, data);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      alert(axiosError.response?.data.message || ERROR_MESSAGE);
      return [];
    }
  }
}

export const searchSickNmListAPI = new searchSickNmAPI();
