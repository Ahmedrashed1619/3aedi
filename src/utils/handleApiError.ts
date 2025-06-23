export function handleApiError(error: any) {

  if (error?.response) {
    const status = error.response.status;
    const data = error.response.data;

    if (data?.message) {
      alert(data.message);
    } else if (typeof data === 'string') {
      alert(data);
    } else {
      alert('حدث خطأ غير متوقع من السيرفر.');
    }
  } else if (error?.request) {
    alert('تعذر الاتصال بالسيرفر. تحقق من اتصالك بالإنترنت.');
  } else {
    alert('حدث خطأ أثناء تجهيز الطلب.');
  }
} 