import type { NavItem } from "@/types"

export const SITE_NAME = "StarterKit"
export const SITE_DESCRIPTION = "빠른 웹 개발을 위한 Next.js 스타터킷"

export const NAV_ITEMS: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "대시보드", href: "/dashboard" },
]

export const DASHBOARD_NAV_ITEMS: NavItem[] = [
  { title: "대시보드", href: "/dashboard", icon: "LayoutDashboard" },
  { title: "프로필", href: "/dashboard/profile", icon: "User" },
  { title: "설정", href: "/dashboard/settings", icon: "Settings" },
]
