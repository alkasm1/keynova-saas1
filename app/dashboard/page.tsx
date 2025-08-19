import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Clock, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">مرحباً بك في لوحة التحكم</h1>
          <p className="text-muted-foreground mt-2">إدارة شاملة لحلول القفل البصري الخاصة بك</p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/dashboard/locks/new">إنشاء قفل جديد</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs">عرض التوثيق</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الأقفال</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">عمليات المصادقة</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> منذ الأسبوع الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">معدل النجاح</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1.2%</span> تحسن هذا الشهر
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المشاريع النشطة</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600">3</span> مشاريع جديدة
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              النشاط الأخير
            </CardTitle>
            <CardDescription>آخر العمليات على حسابك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">تم إنشاء قفل جديد</p>
                <p className="text-xs text-muted-foreground">قفل "تسجيل الدخول الرئيسي" - منذ ساعتين</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">تحديث إحصائيات الاستخدام</p>
                <p className="text-xs text-muted-foreground">تقرير شهري جديد متاح - منذ 4 ساعات</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">تحديث أمني مطلوب</p>
                <p className="text-xs text-muted-foreground">يُنصح بتحديث كلمات المرور - منذ يوم</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              إجراءات سريعة
            </CardTitle>
            <CardDescription>الأدوات الأكثر استخداماً</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/dashboard/locks/new">
                <Lock className="w-4 h-4 ml-2" />
                إنشاء قفل بصري جديد
              </Link>
            </Button>

            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/dashboard/projects/new">
                <Users className="w-4 h-4 ml-2" />
                إضافة مشروع جديد
              </Link>
            </Button>

            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/dashboard/analytics">
                <BarChart3 className="w-4 h-4 ml-2" />
                عرض التحليلات المفصلة
              </Link>
            </Button>

            <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
              <Link href="/dashboard/settings/api">
                <Globe className="w-4 h-4 ml-2" />
                إدارة مفاتيح API
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            حالة النظام
          </CardTitle>
          <CardDescription>مراقبة أداء الخدمات</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
              <div>
                <p className="font-medium text-green-800">خدمة المصادقة</p>
                <p className="text-sm text-green-600">تعمل بشكل طبيعي</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                متاح
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
              <div>
                <p className="font-medium text-green-800">API الرئيسي</p>
                <p className="text-sm text-green-600">استجابة سريعة</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                متاح
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
              <div>
                <p className="font-medium text-green-800">قاعدة البيانات</p>
                <p className="text-sm text-green-600">أداء ممتاز</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                متاح
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
