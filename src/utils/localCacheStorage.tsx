import { SickNmListProps } from '../service/searchAPI';

const FETCH_DATE = 'fetch-date';
const EXPIRE_TIME = 1000 * 60 * 5;

export const checkCacheExpireTime = (cacheResponse: Response) => {
  const cachedDate = cacheResponse.headers.get(FETCH_DATE);
  if (!cachedDate) return;

  const fetchDate = new Date(cachedDate).getTime();
  const today = Date.now();

  return today - fetchDate > EXPIRE_TIME;
};

export const checkCachedResponse = async (url: string, queryStr: string) => {
  const cacheStorage = await caches.open(url);
  const cachedResponse = await cacheStorage.match(queryStr);

  if (cachedResponse) {
    if (!checkCacheExpireTime(cachedResponse)) {
      return cachedResponse;
    } else {
      await cacheStorage.delete(queryStr);
    }
  }

  return null;
};

export const setCacheStorage = async (
  url: string,
  queryStr: string,
  data: SickNmListProps[]
) => {
  const cacheStorage = await caches.open(url);
  const response = new Response(JSON.stringify(data));

  const copiedResponse = response.clone();
  const newHeaders = new Headers(copiedResponse.headers);
  newHeaders.set(FETCH_DATE, new Date().toISOString());

  const newResponse = new Response(copiedResponse.body, {
    status: copiedResponse.status,
    statusText: copiedResponse.statusText,
    headers: newHeaders,
  });

  await cacheStorage.put(queryStr, newResponse);
};
