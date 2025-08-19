"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Code, Key, CheckCircle, ArrowLeft, Copy, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/docs" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">دليل البدء السريع</h1>
                <p className="text-sm text-muted-foreground">Keynova Lock</p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/docs">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  العودة للتوثيق
                </Button>
              </Link>
              <Link href="/register">
                <Button>احصل على API Key</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Code className="w-4 h-4 ml-2" />
              دليل البدء السريع
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">ابدأ في 5 دقائق</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              دليل شامل لتكامل القفل البصري في موقعك أو تطبيقك خطوة بخطوة
            </p>
          </div>

          {/* Prerequisites */}
          <Alert className="mb-8">
            <AlertTriangle className="w-4 h-4" />
            <AlertDescription>
              <strong>المتطلبات:</strong> معرفة أساسية بـ JavaScript أو أي لغة برمجة أخرى، وحساب Keynova Lock نشط.
            </AlertDescription>
          </Alert>

          {/* Step-by-step Guide */}
          <div className="space-y-8">
            {/* Step 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <CardTitle>إنشاء حساب والحصول على API Key</CardTitle>
                    <CardDescription>الخطوة الأولى للبدء مع Keynova Lock</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">إنشاء حساب جديد</h4>
                    <ol className="text-sm space-y-1 text-muted-foreground">
                      <li>1. اذهب إلى صفحة التسجيل</li>
                      <li>2. أدخل بياناتك الأساسية</li>
                      <li>3. تأكيد البريد الإلكتروني</li>
                      <li>4. تسجيل الدخول لأول مرة</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">الحصول على API Key</h4>
                    <ol className="text-sm space-y-1 text-muted-foreground">
                      <li>1. اذهب إلى لوحة التحكم</li>
                      <li>2. انقر على "مفاتيح API"</li>
                      <li>3. انقر على "إنشاء مفتاح جديد"</li>
                      <li>4. احفظ المفتاح في مكان آمن</li>
                    </ol>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="/register">إنشاء حساب مجاني</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">
                      <ExternalLink className="w-4 h-4 ml-2" />
                      لوحة التحكم
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <CardTitle>إنشاء أول قفل بصري</CardTitle>
                    <CardDescription>إعداد قفل بصري لحماية المحتوى</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="dashboard" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="dashboard">عبر لوحة التحكم</TabsTrigger>
                    <TabsTrigger value="api">عبر API</TabsTrigger>
                  </TabsList>

                  <TabsContent value="dashboard">
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">الطريقة الأسهل لإنشاء قفل جديد:</p>
                      <ol className="text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>اذهب إلى لوحة التحكم → الأقفال البصرية</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>انقر على "إنشاء قفل جديد"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>أدخل اسم القفل وكلمة المرور</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>اختر الصورة الصحيحة من الشبكة</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>احفظ معرف القفل (Lock ID) للاستخدام</span>
                        </li>
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="api">
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">إنشاء قفل باستخدام API:</p>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground">POST /api/locks</span>
                          <Button variant="ghost" size="sm">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <pre className="text-xs overflow-x-auto">
                          {`curl -X POST https://api.keynova-lock.com/api/locks \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: kn_live_your_api_key_here" \\
  -d '{
    "name": "Homepage Lock",
    "correctImageIndex": 0,
    "correctPassword": "secret123",
    "maxAttempts": 3
  }'`}
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <CardTitle>تكامل القفل في موقعك</CardTitle>
                    <CardDescription>إضافة القفل البصري لحماية المحتوى</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="html" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="html">HTML/JavaScript</TabsTrigger>
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="vue">Vue.js</TabsTrigger>
                  </TabsList>

                  <TabsContent value="html">
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">HTML + JavaScript</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-xs overflow-x-auto">
                        {`<!-- HTML -->
<div id="visual-lock"></div>
<div id="protected-content" style="display: none;">
  <h2>المحتوى المحمي</h2>
  <p>هذا المحتوى محمي بالقفل البصري</p>
</div>

<script>
// JavaScript
async function verifyLock(lockId, imageIndex, password) {
  const response = await fetch('/api/auth/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'kn_live_your_api_key_here'
    },
    body: JSON.stringify({
      lockId: lockId,
      selectedImageIndex: imageIndex,
      password: password
    })
  });
  
  const result = await response.json();
  
  if (result.success) {
    document.getElementById('visual-lock').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
  } else {
    alert('فشل في فتح القفل: ' + result.error);
  }
}
</script>`}
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="react">
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">React Component</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-xs overflow-x-auto">
                        {`import { useState } from 'react';
import { VisualLock } from '@keynova/react-lock';

function ProtectedPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSuccess = () => {
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return (
      <VisualLock
        lockId="lock_1"
        apiKey="kn_live_your_api_key_here"
        onSuccess={handleSuccess}
        title="القفل البصري"
        description="اختر الصورة الصحيحة وأدخل كلمة المرور"
      />
    );
  }

  return (
    <div>
      <h2>المحتوى المحمي</h2>
      <p>تم فتح القفل بنجاح!</p>
    </div>
  );
}`}
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="vue">
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Vue.js Component</span>
                        <Button variant="ghost" size="sm">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-xs overflow-x-auto">
                        {`<template>
  <div>
    <VisualLock
      v-if="!isUnlocked"
      :lock-id="'lock_1'"
      :api-key="'kn_live_your_api_key_here'"
      @success="handleSuccess"
      title="القفل البصري"
      description="اختر الصورة الصحيحة وأدخل كلمة المرور"
    />
    <div v-else>
      <h2>المحتوى المحمي</h2>
      <p>تم فتح القفل بنجاح!</p>
    </div>
  </div>
</template>

<script>
import { VisualLock } from '@keynova/vue-lock';

export default {
  components: { VisualLock },
  data() {
    return {
      isUnlocked: false
    };
  },
  methods: {
    handleSuccess() {
      this.isUnlocked = true;
    }
  }
};
</script>`}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">4</span>
                  </div>
                  <div>
                    <CardTitle>اختبار وتحسين الأداء</CardTitle>
                    <CardDescription>التأكد من عمل القفل بشكل صحيح</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">اختبار القفل</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• جرب الصورة والكلمة الصحيحة</li>
                      <li>• اختبر الصور والكلمات الخاطئة</li>
                      <li>• تأكد من عمل حد المحاولات</li>
                      <li>• اختبر على أجهزة مختلفة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">مراقبة الأداء</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• راجع التحليلات في لوحة التحكم</li>
                      <li>• تابع معدل النجاح</li>
                      <li>• راقب سرعة الاستجابة</li>
                      <li>• اضبط الإعدادات حسب الحاجة</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="/demo">جرب العرض التوضيحي</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/analytics">عرض التحليلات</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-accent" />
                الخطوات التالية
              </CardTitle>
              <CardDescription>استكشف المزيد من الميزات والإمكانيات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/docs/api" className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <h4 className="font-medium mb-2">مرجع API الكامل</h4>
                  <p className="text-sm text-muted-foreground">اكتشف جميع endpoints والخيارات المتاحة</p>
                </Link>
                <Link href="/docs/examples" className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <h4 className="font-medium mb-2">أمثلة متقدمة</h4>
                  <p className="text-sm text-muted-foreground">تكاملات معقدة وحالات استخدام متنوعة</p>
                </Link>
                <Link href="/docs/faq" className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <h4 className="font-medium mb-2">الأسئلة الشائعة</h4>
                  <p className="text-sm text-muted-foreground">إجابات للمشاكل والأسئلة الشائعة</p>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="mt-8 text-center">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-4">تحتاج مساعدة إضافية؟</h3>
              <p className="text-muted-foreground mb-6">فريق الدعم الفني متاح لمساعدتك في كل خطوة</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <Link href="/support">
                    <ExternalLink className="w-4 h-4" />
                    مركز المساعدة
                  </Link>
                </Button>
                <Button className="gap-2" asChild>
                  <Link href="/contact">
                    <Shield className="w-4 h-4" />
                    تواصل مع الدعم
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
