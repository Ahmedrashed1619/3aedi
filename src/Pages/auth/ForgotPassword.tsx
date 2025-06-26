import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./Auth.scss";
import { useToast } from '@/hooks/useToast';
import LoginHero from "./LoginHero";
import service from "@/services/fetchInterceptor";
import END_POINTS from "@/services/constants";

const ForgotPassword = () => {

  const [form] = Form.useForm();
  const toast = useToast();

  const onFinish = async (values: any) => {
    try {
        const { data } = await service.post(END_POINTS.FORGOT_PASSWORD, values);
        if (data?.status === "success") {
            toast.success(data?.message || 'تم إرسال رابط تعيين كلمة المرور بنجاح!');
        } else {
            toast.error(data?.message || 'فشل إرسال رابط التعيين');
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
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:px-10 mx-auto">
                <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">نسيت كلمة المرور</h2>
                <Form
                    form={form}
                    name="forgot_password"
                    onFinish={onFinish}
                    layout="vertical"
                    className="space-y-4"
                >
                    <Form.Item
                        name="email"
                        label={<span className="auth-label">البريد الالكتروني</span>}
                        rules={[
                            {
                                required: true,
                                message: "الرجاء إدخال البريد الإلكتروني!",
                            },
                            {
                                type: "email",
                                message: "البريد الإلكتروني الذي تم إدخاله غير صالح!",
                            },
                        ]}
                        className='!mb-0'
                    >
                        <Input
                            className="auth-input !py-2"
                            placeholder="أدخل البريد الإلكتروني"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="mt-2 w-full font-medium py-5"
                            block
                        >
                            إرسال رابط تعيين كلمة المرور
                        </Button>
                    </Form.Item>
                </Form>
                <div className="text-center mt-5 text-xs md:text-sm text-primary-light font-semibold">
                    هل تتذكر كلمة المرور؟ <Link to={'/login'} className="auth-link">تسجيل الدخول</Link>
                </div>
                {/* <div className="text-center">
                    <Button type="link" className="auth-link !text-black hover:!text-primary transition-all duration-200 text-xs" onClick={() => setStep(2)}>
                        العودة لصفحة إعادة التعيين
                    </Button>
                </div> */}
            </div>
        </div>
        <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
            <LoginHero
                title="نجاحك يبدأ هنا!"
                description="نوفر لك تحليلات متقدمة وتقارير مفصلة لتساعدك في تحسين مبيعاتك وتعزيز نمو متجرك الإلكتروني بسهولة."
                icon="📈"
            />
        </div>
    </div>
  );
};

export default ForgotPassword; 