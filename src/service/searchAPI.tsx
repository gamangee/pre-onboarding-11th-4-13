import axios, { AxiosInstance } from 'axios';

export interface SickNmListProps {
  sickCd: string;
  sickNm: string;
}

class sickAPI {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:4000',
    });
  }
  async getSickNmList(searchKeyword: string) {
    try {
      const response = await this.axiosInstance.get(`/sick?q=${searchKeyword}`);
      console.info('calling api');
      return response.data.filter((item: SickNmListProps) =>
        item.sickNm.startsWith(searchKeyword)
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export const sickApi = new sickAPI();
