import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';

const Step2BusinessDetails = ({ onNext, onBack, initialValues, isLoading }: { onNext: (values: any) => void, onBack: () => void, initialValues?: any, isLoading?: boolean }) => {
  const [form] = Form.useForm();

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg py-4 px-6 sm:py-5 sm:px-8 md:py-6 md:px-10 lg:px-12 mx-auto">
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onNext}
            className="space-y-4"
        >
            <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">تفاصيل النشاط</h2>
            <Form.Item
                name="email"
                label={<span className="auth-label">البريد الالكتروني</span>}
                rules={[{ required: true, type: 'email', message: 'يرجى إدخال بريد إلكتروني صحيح' }]}
                className='!my-0'
            >
                <Input className='py-2' placeholder="أدخل البريد الالكتروني" />
            </Form.Item>
            <Form.Item
                name="phone"
                label={<span className="auth-label">رقم الجوال</span>}
                rules={[{ required: true, message: 'رقم الجوال مطلوب' }]}
                className='!mb-0'
            >
                <PhoneInput
                    country={'sa'}
                    inputProps={{
                        name: 'phone',
                        required: true,
                    }}
                    placeholder="5xxxxxxxx"
                />
            </Form.Item>
            <Form.Item
                name="password"
                label={<span className="auth-label !mt-0">كلمة المرور</span>}
                rules={[{ required: true, min: 8, message: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' }]}
                className='!mb-0'
            >
                <Input.Password
                className='py-2'
                placeholder="أدخل كلمة المرور"
                iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                />
            </Form.Item>
            <Form.Item
                name="password2"
                label={<span className="auth-label !mt-0">تأكيد كلمة المرور</span>}
                dependencies={["password"]}
                rules={[
                    { required: true, message: 'يرجى تأكيد كلمة المرور!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('كلمتا المرور غير متطابقتين!'));
                        },
                    }),
                ]}
                className='!mb-0'
            >
                <Input.Password
                    className='py-2'
                    placeholder="أعد إدخال كلمة المرور"
                    iconRender={visible => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                />
            </Form.Item>
            <div className="flex gap-4 mt-4">
                <Button type="primary" htmlType="submit" className="w-[60%] font-medium py-5" loading={isLoading}>
                    التالي
                </Button>
                <Button type="default" onClick={onBack} className="w-[40%] font-medium py-5" disabled={isLoading}>
                    العودة
                </Button>
            </div>
        </Form>
    </div>
  );
};

export default Step2BusinessDetails; 