import type { Metadata } from "next"
import { Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "대시보드",
}

const stats = [
  {
    title: "총 사용자",
    value: "2,350",
    change: "+20.1%",
    icon: Users,
    trend: "up" as const,
  },
  {
    title: "월 매출",
    value: "₩4,240,000",
    change: "+15.3%",
    icon: DollarSign,
    trend: "up" as const,
  },
  {
    title: "신규 주문",
    value: "573",
    change: "+8.2%",
    icon: ShoppingCart,
    trend: "up" as const,
  },
  {
    title: "방문자",
    value: "12,234",
    change: "-3.1%",
    icon: TrendingUp,
    trend: "down" as const,
  },
]

const recentActivities = [
  { id: 1, action: "새 사용자 가입", user: "김민준", time: "2분 전" },
  { id: 2, action: "주문 완료", user: "이서연", time: "15분 전" },
  { id: 3, action: "리뷰 작성", user: "박지호", time: "1시간 전" },
  { id: 4, action: "결제 완료", user: "최예린", time: "2시간 전" },
  { id: 5, action: "문의 등록", user: "정우진", time: "3시간 전" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">서비스 현황을 한눈에 확인하세요.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <Badge
                  variant={stat.trend === "up" ? "default" : "destructive"}
                  className="mt-1 text-xs"
                >
                  {stat.change} 지난 달 대비
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>최근 발생한 활동 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.user}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
