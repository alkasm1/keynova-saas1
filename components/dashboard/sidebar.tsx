"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, BarChart3, Settings, FileText, ChevronLeft, Home, Key } from "lucide-react"

const navigation = [
  {
    name: "لوحة التحكم",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "الأقفال البصرية",
    href: "/dashboard/locks",
    icon: Lock,
  },
  {
    name: "المشاريع",
    href: "/dashboard/projects",
    icon: Users,
  },
  {
    name: "التحليلات",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "مفاتيح API",
    href: "/dashboard/api-keys",
    icon: Key,
  },
  {
    name: "التوثيق",
    href: "/docs",
    icon: FileText,
  },
  {
    name: "الإعدادات",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "bg-card border-l border-border h-screen sticky top-0 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-foreground">Keynova Lock</h2>
              <p className="text-xs text-muted-foreground">لوحة التحكم</p>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="mr-auto">
            <ChevronLeft className={cn("w-4 h-4 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                <item.icon className="w-4 h-4" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
