import Link from "next/link"
import { cn } from "@/lib/utils"
import { SITE_NAME } from "@/lib/constants"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80",
        className
      )}
    >
      {SITE_NAME}
    </Link>
  )
}
