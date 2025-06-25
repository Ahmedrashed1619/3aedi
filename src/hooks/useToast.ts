import { toast, ToastOptions } from 'react-hot-toast';

export type ToastType = 'success' | 'error' | 'info' | 'loading';

export interface ShowToastOptions extends ToastOptions {
  type?: ToastType;
}

export const useToast = () => {
  const show = (message: string, options?: ShowToastOptions) => {
    switch (options?.type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'loading':
        toast.loading(message, options);
        break;
      case 'info':
      default:
        toast(message, options);
        break;
    }
  };

  return {
    success: (msg: string, options?: ToastOptions) => toast.success(msg, options),
    error: (msg: string, options?: ToastOptions) => toast.error(msg, options),
    info: (msg: string, options?: ToastOptions) => toast(msg, options),
    loading: (msg: string, options?: ToastOptions) => toast.loading(msg, options),
    show,
    dismiss: toast.dismiss,
  };
}; 