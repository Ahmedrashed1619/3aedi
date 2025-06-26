import { toast } from 'react-hot-toast';

export function handleApiError(error: any) {

  if (error?.response) {
    // const status = error.response.status;
    const data = error.response.data;

    if (data?.message) {
      toast.error(data.message);
    } else if (typeof data === 'string') {
      toast.error(data);
    } else {
      toast.error('حدث خطأ غير متوقع من السيرفر.');
    }
  } else if (error?.request) {
    toast.error('تعذر الاتصال بالسيرفر. تحقق من اتصالك بالإنترنت.');
  } else {
    toast.error('حدث خطأ أثناء تجهيز الطلب.');
  }
} 