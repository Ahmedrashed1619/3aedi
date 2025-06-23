import { useState } from 'react';
import { useSWRConfig } from 'swr';
import service from '@/services/fetchInterceptor';
import { handleApiError } from '@/utils/handleApiError';

interface MutationOptions {
  successMessage?: string;
  errorMessage?: string;
  revalidateKey?: string | (string | any[])[];
}

type MutationResult<T> = {
  data: T | null;
  error: any | null;
  isMutating: boolean;
};

/**
 * A custom hook for performing data mutations (POST, PUT, DELETE).
 * It manages its own loading and error state, shows success/error notifications,
 * and can revalidate SWR caches upon success.
 */
export const useMutation = () => {
  const { mutate: revalidate } = useSWRConfig();
  const [result, setResult] = useState<MutationResult<any>>({
    data: null,
    error: null,
    isMutating: false,
  });

  const execute = async <T>(
    method: 'post' | 'put' | 'delete',
    url: string,
    data?: any,
    options: MutationOptions = {}
  ): Promise<T | undefined> => {
    const { successMessage, errorMessage, revalidateKey } = options;
    setResult({ data: null, error: null, isMutating: true });

    try {
      const response = await service[method]<T>(url, data);
      setResult({ data: response.data, error: null, isMutating: false });

      if (successMessage) {
        alert(successMessage); // Can be replaced with a toast notification
      }

      if (revalidateKey) {
        if (Array.isArray(revalidateKey)) {
          await Promise.all(revalidateKey.map(key => revalidate(key)));
        } else {
          await revalidate(revalidateKey);
        }
      }

      return response.data;
    } catch (error: any) {
      setResult({ data: null, error, isMutating: false });
      if (errorMessage) {
        alert(errorMessage);
      } else {
        handleApiError(error);
      }
      return undefined;
    }
  };

  const post = <T>(url: string, data: any, options?: MutationOptions) =>
    execute<T>('post', url, data, options);

  const update = <T>(url:string, data: any, options?: MutationOptions) =>
    execute<T>('put', url, data, options);

  const remove = <T>(url: string, options?: MutationOptions) =>
    execute<T>('delete', url, undefined, options);

  return { post, update, remove, ...result };
};
