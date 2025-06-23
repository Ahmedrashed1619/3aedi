export function handleApiError(error: any) {
  // يمكنك استبدال alert بأي نظام إشعارات لاحقًا
  if (error?.response) {
    // أخطاء من السيرفر مع استجابة
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
    // لم يتم استلام أي استجابة
    alert('تعذر الاتصال بالسيرفر. تحقق من اتصالك بالإنترنت.');
  } else {
    // خطأ في إعداد الطلب
    alert('حدث خطأ أثناء تجهيز الطلب.');
  }
} 