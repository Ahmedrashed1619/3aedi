import useSWR from 'swr';
import { AxiosRequestConfig } from 'axios';

/**
 * A custom hook for fetching data using SWR.
 * @param url The API endpoint to fetch data from.
 * @param params Optional query parameters.
 * @returns An object containing the fetched data, loading state, error state, and a mutate function.
 */
export const useFetch = <Data = any, Error = any>(
  url: string | null,
  params?: AxiosRequestConfig['params']
) => {
  // SWR automatically passes the key as arguments to the global fetcher.
  // If the key is an array `[url, params]`, it calls `fetcher(url, params)`.
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR<Data, Error>(url ? [url, params] : null);

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
}; 