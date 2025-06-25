import { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./Auth.scss";
import RegisterHero from "./RegisterHero";
import { useToast } from '@/hooks/useToast';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();
  const toast = useToast();

  const onFinishFirstStep = (values: any) => {
    console.log("Email submitted:", values);
    toast.success('تم إرسال رابط تعيين كلمة المرور بنجاح!');
    setStep(2);
  };

  const onFinishSecondStep = (values: any) => {
    console.log("New password submitted:", values);
    toast.success('تم تعيين كلمة المرور الجديدة بنجاح!');
  };

  return (

    <div className="min-h-screen w-full flex flex-col-reverse md:flex-row bg-background font-arabic relative">
        <img
            src="/logo.png"
            alt="3aedi-logo"
            className="hidden md:block absolute top-8 right-8 z-20 h-10"
        />
            {step === 1 ? (
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:px-10 mx-auto">
                        <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">نسيت كلمة المرور</h2>
                        <Form
                            form={form}
                            name="forgot_password"
                            onFinish={onFinishFirstStep}
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
                        <div className="text-center">
                            <Button type="link" className="auth-link !text-black hover:!text-primary transition-all duration-200 text-xs" onClick={() => setStep(2)}>
                                العودة لصفحة إعادة التعيين
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg py-4 px-6 sm:py-5 sm:px-8 md:py-6 md:px-10 lg:px-12 mx-auto">
                    {/* <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:px-10 mx-auto"> */}
                        <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">تعيين كلمة المرور الجديدة</h2>
                        <Form
                            form={form}
                            name="reset_password"
                            onFinish={onFinishSecondStep}
                            layout="vertical"
                            className="space-y-4"
                        >
                            <Form.Item
                                name="password"
                                label={<span className="auth-label">كلمة المرور</span>}
                                rules={[
                                    {
                                        required: true,
                                        message: "الرجاء إدخال كلمة المرور!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password
                                    className="auth-input !py-2"
                                    placeholder="أدخل كلمة المرور"
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label={<span className="auth-label">تأكيد كلمة المرور</span>}
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "الرجاء تأكيد كلمة المرور!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("password") === value) {
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
                        <div className="text-center">
                            <Button type="link" className="auth-link !text-black hover:!text-primary transition-all duration-200 text-xs" onClick={() => setStep(1)}>
                                العودة لصفحة إرسال رابط التعيين
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        <div className="md:basis-1/2 lg:basis-[45%] xl:basis-2/5 h-full">
            <RegisterHero currentStep={step} />
        </div>
    </div>
  );
};

export default ForgotPassword; 