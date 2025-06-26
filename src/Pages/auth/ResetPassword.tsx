import { Form, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom";
import "./Auth.scss";
import { useToast } from '@/hooks/useToast';
import LoginHero from "./LoginHero";
import service from "@/services/fetchInterceptor";
import END_POINTS from "@/services/constants";

const ResePassword = () => {

  const { id } = useParams()

  const [form] = Form.useForm();
  const toast = useToast();

  const onFinish = async (values: any) => {
    try {
        const { data } = await service.post(`${END_POINTS.RESET_PASSWORD}${id}/`, values);
        if (data?.status === "success") {
            toast.success(data?.message || 'تم تعيين كلمة المرور الجديدة بنجاح!');
        } else {
            toast.error(data?.message || 'حدث خطأ أثناء تعيين كلمة المرور');
        }
    } catch (error) {
        console.error(error);
    }
  };

  return (

    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row bg-background font-arabic relative">
        <img
            src="/logo.png"
            alt="3aedi-logo"
            className="hidden md:block absolute top-8 right-8 z-20 h-10"
        />
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-lg py-4 px-6 sm:py-5 sm:px-8 md:py-6 md:px-10 lg:px-12 mx-auto">
                    <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">تعيين كلمة المرور الجديدة</h2>
                    <Form
                        form={form}
                        name="reset_password"
                        onFinish={onFinish}
                        layout="vertical"
                        className="space-y-4"
                    >
                        <Form.Item
                            name="new_password"
                            label={<span className="auth-label">كلمة المرور</span>}
                            rules={
                                [
                                    { required: true, min: 6, message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' }
                                ]
                            }
                            hasFeedback
                        >
                            <Input.Password
                                className="auth-input !py-2"
                                placeholder="أدخل كلمة المرور"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm_password"
                            label={<span className="auth-label">تأكيد كلمة المرور</span>}
                            dependencies={["new_password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "الرجاء تأكيد كلمة المرور!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("new_password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("كلمتا المرور اللتان أدخلتهما غير متطابقتين!")
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                className="auth-input !py-2"
                                placeholder="أدخل كلمة المرور"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="mt-2 w-full font-medium py-5"
                                block
                            >
                                تأكيد
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="text-center mt-5 text-xs md:text-sm text-primary-light font-semibold">
                        هل تتذكر كلمة المرور؟ <Link to={'/login'} className="auth-link">تسجيل الدخول</Link>
                    </div>
                    {/* <div className="text-center">
                        <Button type="link" className="auth-link !text-black hover:!text-primary transition-all duration-200 text-xs" onClick={() => setStep(1)}>
                            العودة لصفحة إرسال رابط التعيين
                        </Button>
                    </div> */}
                </div>
            </div>
        <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
            <LoginHero
                title="قرارات أذكى اليوم!"
                description="استفد من التحليلات الدقيقة والتقارير التفصيلية لتطوير متجرك الإلكتروني وتحقيق أفضل النتائج بسهولة."
                icon="📊"
            />
        </div>
    </div>
  );
};

export default ResePassword; 