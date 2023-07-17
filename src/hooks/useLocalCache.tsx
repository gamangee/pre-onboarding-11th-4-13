import { useEffect, useState } from 'react';
import { SickNmListProps } from '../service/searchAPI';

interface LocalCacheProps {
  api: () => Promise<SickNmListProps[]>;
  cacheTime: number;
}

interface CacheDataProps {
  data: SickNmListProps[];
  expireTime: number;
}

const useLocalCache = ({ api, cacheTime }: LocalCacheProps) => {
  const [cachedData, setCahchedData] = useState<CacheDataProps | null>(null);

  const fetchData = async () => {
    try {
      console.info('cache calling api');
      const data = await api();
      const expireTime = Date.now() + cacheTime;
      setCahchedData({ data, expireTime });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!cachedData || cachedData.expireTime < Date.now()) {
      fetchData();
    }
  }, [cachedData, cacheTime]);

  return cachedData ? cachedData.data : null;
};

export default useLocalCache;
