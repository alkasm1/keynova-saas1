import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, BookOpen, HelpCircle, Zap, ArrowLeft, ExternalLink, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Keynova Lock</h1>
                <p className="text-sm text-muted-foreground">مركز التوثيق والمساعدة</p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  العودة للرئيسية
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button>لوحة التحكم</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 ml-2" />
              مركز التوثيق
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">كل ما تحتاجه للبدء</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              أدلة شاملة وأمثلة عملية لتكامل القفل البصري في مشاريعك بسهولة وأمان
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/docs/getting-started">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>البدء السريع</CardTitle>
                  <CardDescription>ابدأ التكامل في 5 دقائق مع دليل خطوة بخطوة</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/docs/api">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>مرجع API</CardTitle>
                  <CardDescription>توثيق شامل لجميع endpoints مع أمثلة عملية</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/docs/examples">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>أمثلة التكامل</CardTitle>
                  <CardDescription>أمثلة جاهزة للاستخدام في مختلف المنصات</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/docs/faq">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <HelpCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>الأسئلة الشائعة</CardTitle>
                  <CardDescription>إجابات للأسئلة الأكثر شيوعاً</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/dashboard/analytics">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>التحليلات</CardTitle>
                  <CardDescription>فهم أداء أقفالك البصرية</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/support">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>الدعم الفني</CardTitle>
                  <CardDescription>تواصل مع فريق الدعم للمساعدة</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>

          {/* Popular Topics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>المواضيع الأكثر شيوعاً</CardTitle>
              <CardDescription>المواضيع التي يبحث عنها المطورون أكثر</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Link
                    href="/docs/getting-started#installation"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground">كيفية الحصول على API Key</h4>
                    <p className="text-sm text-muted-foreground">خطوات إنشاء وإدارة مفاتيح API</p>
                  </Link>
                  <Link
                    href="/docs/examples#react"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground">التكامل مع React</h4>
                    <p className="text-sm text-muted-foreground">مثال شامل لاستخدام القفل في React</p>
                  </Link>
                  <Link
                    href="/docs/api#verification"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground">التحقق من الهوية</h4>
                    <p className="text-sm text-muted-foreground">كيفية استخدام endpoint التحقق</p>
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link href="/docs/faq#security" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium text-foreground">الأمان وأفضل الممارسات</h4>
                    <p className="text-sm text-muted-foreground">نصائح لحماية تطبيقك</p>
                  </Link>
                  <Link
                    href="/docs/examples#wordpress"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground">التكامل مع WordPress</h4>
                    <p className="text-sm text-muted-foreground">إضافة القفل البصري لموقع WordPress</p>
                  </Link>
                  <Link
                    href="/docs/faq#troubleshooting"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium text-foreground">حل المشاكل الشائعة</h4>
                    <p className="text-sm text-muted-foreground">إصلاح الأخطاء الأكثر شيوعاً</p>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>موارد إضافية</CardTitle>
                <CardDescription>أدوات ومصادر مفيدة للمطورين</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/demo"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">العرض التوضيحي</h4>
                    <p className="text-sm text-muted-foreground">جرب القفل البصري مباشرة</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">لوحة التحكم</h4>
                    <p className="text-sm text-muted-foreground">إدارة أقفالك ومشاريعك</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </Link>
                <a
                  href="https://github.com/keynova-lock"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-muted-foreground">أمثلة ومكتبات مفتوحة المصدر</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تحديثات حديثة</CardTitle>
                <CardDescription>آخر التحديثات والميزات الجديدة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      جديد
                    </Badge>
                    <span className="text-sm font-medium">API v2.0</span>
                  </div>
                  <p className="text-sm text-muted-foreground">تحسينات في الأداء وميزات جديدة</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      تحديث
                    </Badge>
                    <span className="text-sm font-medium">تحسين الأمان</span>
                  </div>
                  <p className="text-sm text-muted-foreground">طبقات حماية إضافية للتشفير</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      إصلاح
                    </Badge>
                    <span className="text-sm font-medium">تحسين الاستجابة</span>
                  </div>
                  <p className="text-sm text-muted-foreground">تحسينات في سرعة الاستجابة</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support CTA */}
          <Card className="mt-8 text-center">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-4">لم تجد ما تبحث عنه؟</h3>
              <p className="text-muted-foreground mb-6">فريق الدعم الفني متاح لمساعدتك في أي وقت</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2 bg-transparent" asChild>
                  <Link href="/support">
                    <HelpCircle className="w-4 h-4" />
                    مركز المساعدة
                  </Link>
                </Button>
                <Button className="gap-2" asChild>
                  <Link href="/contact">
                    <Users className="w-4 h-4" />
                    تواصل معنا
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
