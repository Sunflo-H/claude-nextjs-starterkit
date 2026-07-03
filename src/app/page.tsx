import Link from "next/link"
import { ArrowRight, Zap, Shield, Palette, Code2, Globe, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const features = [
  {
    icon: Zap,
    title: "빠른 개발",
    description: "반복적인 설정 작업 없이 바로 개발에 집중할 수 있습니다.",
  },
  {
    icon: Palette,
    title: "shadcn/ui",
    description: "아름답고 접근성 높은 UI 컴포넌트를 기본 제공합니다.",
  },
  {
    icon: Shield,
    title: "타입 안전",
    description: "TypeScript로 타입 안전한 코드를 작성하세요.",
  },
  {
    icon: Code2,
    title: "App Router",
    description: "Next.js App Router 구조로 최신 패턴을 따릅니다.",
  },
  {
    icon: Globe,
    title: "반응형 디자인",
    description: "모바일부터 데스크탑까지 완벽하게 대응합니다.",
  },
  {
    icon: Layers,
    title: "다크 모드",
    description: "next-themes로 라이트/다크 모드를 손쉽게 지원합니다.",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-24 text-center md:py-32">
          <div className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            Next.js + shadcn/ui + TailwindCSS v4
          </div>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            더 빠른 개발을 위한
            <span className="text-primary"> 스타터킷</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            반복적인 설정 작업을 줄이고 바로 개발에 집중하세요. 검증된 기술
            스택과 구조로 새 프로젝트를 빠르게 시작할 수 있습니다.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" render={<Link href="/dashboard" />}>
              대시보드 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/login" />}>
              로그인
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">포함된 기능</h2>
            <p className="mt-4 text-muted-foreground">
              자주 쓰이는 것들을 미리 구성해 두었습니다.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/50">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              지금 바로 시작하세요
            </h2>
            <p className="max-w-xl text-muted-foreground">
              clone 한 번으로 검증된 구조를 그대로 사용하세요.
            </p>
            <div className="rounded-lg border border-border bg-background px-6 py-3 font-mono text-sm">
              npx degit hwangbyeongjun/claude-nextjs-starterkit my-app
            </div>
            <Button size="lg" render={<Link href="/dashboard" />}>
              대시보드 살펴보기
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
