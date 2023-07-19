import { BASE_URL, SickNmListProps } from '../service/searchAPI';

const FETCH_DATE = 'fetch-date';
const EXPIRE_TIME = 1000 * 60 * 5;

const checkCacheExpireTime = (cacheResponse: Response) => {
  const cachedDate = cacheResponse.headers.get(FETCH_DATE);
  if (!cachedDate) return;

  const fetchDate = new Date(cachedDate).getTime();
  const today = Date.now();

  return today - fetchDate > EXPIRE_TIME;
};

export const checkCachedResponse = async (completeApiUrl: string) => {
  const cacheName = completeApiUrl.replace(BASE_URL, '');
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(completeApiUrl);

  if (cachedResponse) {
    if (!checkCacheExpireTime(cachedResponse)) {
      return cachedResponse;
    } else {
      await cacheStorage.delete(completeApiUrl);
    }
  }

  return null;
};

export const setCacheStorage = async (
  completeApiUrl: string,
  data: SickNmListProps[]
) => {
  const cacheName = completeApiUrl.replace(BASE_URL, '');
  const cacheStorage = await caches.open(cacheName);
  const response = new Response(JSON.stringify(data));

  const copiedResponse = response.clone();
  const newHeaders = new Headers(copiedResponse.headers);
  newHeaders.set(FETCH_DATE, new Date().toISOString());

  const newResponse = new Response(copiedResponse.body, {
    status: copiedResponse.status,
    statusText: copiedResponse.statusText,
    headers: newHeaders,
  });

  await cacheStorage.put(completeApiUrl, newResponse);
};
