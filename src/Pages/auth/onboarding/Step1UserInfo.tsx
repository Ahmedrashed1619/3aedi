import { Form, Input, Button, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const businessTypes = [
    { value: 'electronics_technology', label: 'الإلكترونيات والتقنية' },
    { value: 'fashion_beauty', label: 'الأزياء والجمال' },
    { value: 'home_decor', label: 'المنزل والديكور' },
    { value: 'entertainment_hobbies', label: 'الترفيه والهوايات' },
    { value: 'pets', label: 'الحيوانات الأليفة' },
    { value: 'marketing_agency', label: 'وكالة تسويق' },
    { value: 'digital_products', label: 'منتجات رقمية' },
    { value: 'other', label: 'أخرى' },
];

const Step1UserInfo = ({ onNext, initialValues, isLoading }: { onNext: (values: any) => void, initialValues?: any, isLoading?: boolean }) => {
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
            <h2 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-text-primary leading-tight">أدخل بيانات متجرك الأساسية</h2>
            <Form.Item
                name="fullName"
                label={<span className="auth-label">الاسم الكريم</span>}
                rules={[
                    { required: true, message: 'الاسم الكامل مطلوب (3 أحرف على الأقل)', min: 3 },
                    { max: 120, message: 'الاسم يجب أن يكون أقل من 120 حرف' }
                ]}
                className='!mb-0'
            >
                <Input className='py-2' placeholder="أدخل اسمك" maxLength={120} />
            </Form.Item>
            <Form.Item
                name="store_name"
                label={<span className="auth-label">أدخل اسم متجرك/وكالة التسويق</span>}
                rules={[
                    { required: true, message: 'اسم المتجر/الوكالة مطلوب', min: 2 },
                    { max: 120, message: 'اسم المتجر يجب أن يكون أقل من 120 حرف' }
                ]}
                className='!mb-0'
            >
                <Input className='py-2' placeholder="أدخل اسم متجرك/وكالتك" maxLength={120} />
            </Form.Item>
            <Form.Item
                name="store_url"
                label={<span className="auth-label">رابط متجرك/وكالة التسويق</span>}
                rules={[
                    { required: true, type: 'url', message: 'يرجى إدخال رابط صحيح' },
                    { max: 200, message: 'الرابط يجب أن يكون أقل من 200 حرف' }
                ]}
                className='!mb-0'
            >
                <Input className='py-2' placeholder="https://store-name.com" maxLength={200} />
            </Form.Item>
            <Form.Item
                name="store_category"
                label={<span className="auth-label">نشاطك التجاري</span>}
                rules={[{ required: true, message: 'نوع النشاط التجاري مطلوب' }]}
                className='!mb-0'
            >
                <Select
                    placeholder="اختر نوع النشاط"
                    suffixIcon={<DownOutlined style={{ color: '#1B2559', fontSize: 12, right: 0 }} />}
                    styles={{ popup: { root: { textAlign: 'right' } } }}
                >
                    {businessTypes.map((opt, i) => (
                        <Select.Option key={i} value={opt.value} className="text-xs lg:text-sm 2xl:text-base">
                        {opt.label}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            {/* <Button type="primary" className="w-full font-medium py-5 mt-4" onClick={onNext} loading={isLoading}></Button> */}
            <Button type="primary" htmlType="submit" className="mt-2 w-full font-medium py-5" loading={isLoading}>
                التالي
            </Button>
        </Form>
    </div>
  );
};

export default Step1UserInfo; 