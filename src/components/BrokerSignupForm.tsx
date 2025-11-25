import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Progress } from "./ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import {
  Building2,
  User,
  FileText,
  FileCheck,
  Send,
} from "lucide-react";

export function BrokerSignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [brokerType, setBrokerType] = useState("individual");
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    {
      number: 1,
      title: "Broker Type",
      titleAr: "نوع الوسيط",
      icon: User,
    },
    {
      number: 2,
      title: "Broker Details",
      titleAr: "تفاصيل الوسيط",
      icon: FileText,
    },
    {
      number: 3,
      title: "Documents",
      titleAr: "المستندات",
      icon: FileCheck,
    },
    {
      number: 4,
      title: "Agreement",
      titleAr: "الاتفاقية",
      icon: FileText,
    },
    {
      number: 5,
      title: "Submit",
      titleAr: "إرسال",
      icon: Send,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Portal Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-blue-900">
                Offshore Real Estate Portal
              </h2>
              <p className="text-gray-600 text-sm">
                بوابة تسجيل الوسطاء الخارجيين
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600 text-sm">
              Language / اللغة
            </p>
            <p className="text-blue-600">EN | AR</p>
          </div>
        </div>
      </div>

      {/* Main Form Card */}
      <Card className="bg-white rounded-lg shadow-md p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-blue-900 mb-2">
            Broker Registration Form
          </h1>
          <p className="text-gray-600">نموذج تسجيل الوسيط</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 mb-4" />
          <div className="flex justify-between">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col items-center gap-2 ${
                    isActive
                      ? "text-blue-600"
                      : isCompleted
                        ? "text-green-600"
                        : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : isCompleted
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-xs">{step.title}</p>
                    <p className="text-xs" dir="rtl">
                      {step.titleAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[500px]">
          {/* Step 1: Broker Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label className="mb-3 block">
                  Select Broker Type / اختر نوع الوسيط
                </Label>
                <RadioGroup
                  value={brokerType}
                  onValueChange={setBrokerType}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 cursor-pointer">
                      <RadioGroupItem
                        value="individual"
                        id="individual"
                      />
                      <label
                        htmlFor="individual"
                        className="flex-1 cursor-pointer"
                      >
                        <p>Individual Broker</p>
                        <p
                          className="text-gray-500 text-sm"
                          dir="rtl"
                        >
                          وسيط فردي
                        </p>
                      </label>
                      <User
                        className="text-blue-600"
                        size={24}
                      />
                    </div>
                    <div className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 cursor-pointer">
                      <RadioGroupItem
                        value="company"
                        id="company"
                      />
                      <label
                        htmlFor="company"
                        className="flex-1 cursor-pointer"
                      >
                        <p>Company / Corporation</p>
                        <p
                          className="text-gray-500 text-sm"
                          dir="rtl"
                        >
                          شركة
                        </p>
                      </label>
                      <Building2
                        className="text-blue-600"
                        size={24}
                      />
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 2: Broker Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nameEn">
                    Full Name (English) "Optional"
                  </Label>
                  <Input
                    id="nameEn"
                    placeholder="John Smith"
                    className="mt-1"
                  />
                </div>
                <div dir="rtl">
                  <Label htmlFor="nameAr">
                    الاسم الرباعي القانوني كامل (عربي)
                  </Label>
                  <Input
                    id="nameAr"
                    placeholder=" مصطفى محمد احمد على"
                    className="mt-1 text-right"
                    dir="rtl"
                  />
                </div>
              </div>

              {brokerType === "company" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyEn">
                      Company Name (English) "Optional"
                    </Label>
                    <Input
                      id="companyEn"
                      placeholder="ABC Real Estate"
                      className="mt-1"
                    />
                  </div>
                  <div dir="rtl">
                    <Label htmlFor="companyAr">
                      اسم الشركة (عربي)-يجب ان يطابق رخصة فال
                    </Label>
                    <Input
                      id="companyAr"
                      placeholder="شركة عقارات الخليج"
                      className="mt-1 text-right"
                      dir="rtl"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="idNumber">
                    National ID / Iqama Number
                  </Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    رقم الهوية / الإقامة
                  </Label>
                  <Input
                    id="idNumber"
                    placeholder="1234567890"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    رقم الهاتف
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+966 5xx-xxx-xxx"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="broker@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="city">
                    City (Multi-Select)
                  </Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    المدينة
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Cities">
                        جميع المدن
                      </SelectItem>
                      <SelectItem value="riyadh">
                        Riyadh / الرياض
                      </SelectItem>
                      <SelectItem value="jeddah">
                        Jeddah / جدة
                      </SelectItem>
                      <SelectItem value="dammam">
                        Dammam / الدمام
                      </SelectItem>
                      <SelectItem value="khobar">
                        Khobar / الخبر
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {brokerType === "company" && (
                <div>
                  <Label htmlFor="crNumber">
                    Commercial Registration Number
                  </Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    رقم السجل التجاري
                  </Label>
                  <Input
                    id="crNumber"
                    placeholder="1234567890"
                    className="mt-1"
                  />
                </div>
              )}
              {brokerType === "individual" && (
                <div>
                  <Label htmlFor="city">الحالة الوظيفية</Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    Employment Status
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Cities">
                        لا يعمل
                      </SelectItem>
                      <SelectItem value="riyadh">
                        يعمل (قطاع خاص)
                      </SelectItem>
                      <SelectItem value="jeddah">
                        يعمل (قطاع حكومي)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              {brokerType === "company" && (
                <div>
                  <Label htmlFor="city">Company Type</Label>
                  <Label
                    className="text-gray-500 text-xs"
                    dir="rtl"
                  >
                    نوع الشركة
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Cities">
                        شركة/مكتب إدارة الأملاك
                      </SelectItem>
                      <SelectItem value="riyadh">
                        شركة تسويق عقاري
                      </SelectItem>
                      <SelectItem value="jeddah">
                        أخرى
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              {brokerType === "individual" && (
                <div className="grid grid-cols-2 gap-4">
                  <div dir="rtl">
                    <Label htmlFor="companyAr">
                      (أختياري) اسم الشركة-إذا تعمل في شركة
                      عقارات
                    </Label>
                    <Input
                      id="companyAr"
                      placeholder="شركة عقارات الخليج"
                      className="mt-1 text-right"
                      dir="rtl"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Documents */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText
                  className="mx-auto mb-4 text-gray-400"
                  size={48}
                />
                <p className="mb-2">
                  National ID / Iqama (PDF or Image)
                </p>
                <p
                  className="text-gray-500 text-sm mb-4"
                  dir="rtl"
                >
                  الهوية الوطنية / الإقامة
                </p>
                <Button variant="outline">Choose File</Button>
                <p className="text-gray-400 text-xs mt-2">
                  Max size: 5MB
                </p>
              </div>

              {brokerType === "company" && (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileText
                    className="mx-auto mb-4 text-gray-400"
                    size={48}
                  />
                  <p className="mb-2">
                    Commercial Registration (PDF)
                  </p>
                  <p
                    className="text-gray-500 text-sm mb-4"
                    dir="rtl"
                  >
                    السجل التجاري
                  </p>
                  <Button variant="outline">Choose File</Button>
                  <p className="text-gray-400 text-xs mt-2">
                    Max size: 5MB
                  </p>
                </div>
              )}

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText
                  className="mx-auto mb-4 text-gray-400"
                  size={48}
                />
                <p className="mb-2">
                  Commercial Registration (PDF)
                </p>
                <p
                  className="text-gray-500 text-sm mb-4"
                  dir="rtl"
                >
                  (فال)رخصة العقارات
                </p>
                <Button variant="outline">Choose File</Button>
                <p className="text-gray-400 text-xs mt-2">
                  Max size: 5MB
                </p>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText
                  className="mx-auto mb-4 text-gray-400"
                  size={48}
                />
                <p className="mb-2">
                  Real Estate License (PDF)
                </p>
                <p
                  className="text-gray-500 text-sm mb-4"
                  dir="rtl"
                >
                  IBAN - الحساب البنكي
                </p>
                <Button variant="outline">Choose File</Button>
                <p className="text-gray-400 text-xs mt-2">
                  Max size: 5MB
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Agreement */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 max-h-64 overflow-y-auto bg-gray-50">
                <h3 className="mb-4">
                  Broker Agreement Terms and Conditions
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>
                    1. The broker agrees to comply with all
                    regulations set forth by the Saudi Real
                    Estate Authority.
                  </p>
                  <p>
                    2. All client information must be kept
                    confidential and used only for legitimate
                    business purposes.
                  </p>
                  <p>
                    3. The broker commits to maintain
                    professional standards in all transactions.
                  </p>
                  <p>
                    4. Commission rates are as agreed upon in
                    the separate commission schedule.
                  </p>
                  <p>
                    5. The broker must renew their license
                    before expiration to maintain active status.
                  </p>
                </div>
                <div
                  className="mt-6 space-y-3 text-gray-700 text-sm"
                  dir="rtl"
                >
                  <p className="text-right">
                    ١. يوافق الوسيط على الالتزام بجميع اللوائح
                    الصادرة عن الهيئة العامة للعقار.
                  </p>
                  <p className="text-right">
                    ٢. يجب الحفاظ على سرية جميع معلومات العملاء
                    واستخدامها فقط لأغراض تجارية مشروعة.
                  </p>
                  <p className="text-right">
                    ٣. يلتزم الوسيط بالحفاظ على المعايير المهنية
                    في جميع المعاملات.
                  </p>
                  <p className="text-right">
                    ٤. معدلات العمولة كما هو متفق عليه في جدول
                    العمولات المنفصل.
                  </p>
                  <p className="text-right">
                    ٥. يجب على الوسيط تجديد الترخيص قبل انتهاء
                    صلاحيته للحفاظ على الحالة النشطة.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm cursor-pointer"
                >
                  I have read and agree to the terms and
                  conditions
                  <span
                    className="block text-gray-500"
                    dir="rtl"
                  >
                    لقد قرأت ووافقت على الشروط والأحكام
                  </span>
                </label>
              </div>

              <div>
                <Label className="mb-2 block">
                  Digital Signature (Required)
                </Label>
                <Label
                  className="text-gray-500 text-sm mb-3 block"
                  dir="rtl"
                >
                  التوقيع الرقمي (مطلوب)
                </Label>
                <div className="border-2 border-gray-300 rounded-lg p-8 bg-white">
                  <div className="border-b-2 border-gray-400 pb-2 mb-2 min-h-[100px] flex items-end justify-center">
                    <p className="text-gray-400 italic">
                      Sign here
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-xs">
                      Draw your signature above
                    </p>
                    <Button variant="ghost" size="sm">
                      Clear
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Submit */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center py-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <FileCheck
                  className="text-blue-600"
                  size={40}
                />
              </div>
              <div>
                <h2 className="text-blue-900 mb-2">
                  Review & Submit
                </h2>
                <p className="text-gray-600" dir="rtl">
                  مراجعة وإرسال
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left max-w-md mx-auto">
                <h3 className="mb-4">Application Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Broker Type:
                    </span>
                    <span>
                      {brokerType === "individual"
                        ? "Individual"
                        : "Company"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span>احمد محمد على</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      ID Number:
                    </span>
                    <span>1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Phone:
                    </span>
                    <span>+966 5xx-xxx-xxx</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Documents:
                    </span>
                    <span className="text-green-600">
                      3 Uploaded
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Agreement:
                    </span>
                    <span className="text-green-600">
                      Signed
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                By submitting this form, your application will
                be sent to the admin for review.
              </p>
              <p className="text-gray-500 text-sm" dir="rtl">
                بإرسال هذا النموذج، سيتم إرسال طلبك إلى المسؤول
                للمراجعة.
              </p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={() =>
              setCurrentStep(Math.max(1, currentStep - 1))
            }
            disabled={currentStep === 1}
          >
            Previous / السابق
          </Button>
          <div className="text-gray-500 text-sm">
            Step {currentStep} of {totalSteps}
          </div>
          {currentStep < totalSteps ? (
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                setCurrentStep(
                  Math.min(totalSteps, currentStep + 1),
                )
              }
            >
              Next / التالي
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700">
              Submit Application / إرسال الطلب
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}