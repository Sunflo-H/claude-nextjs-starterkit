import { SITE_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex h-14 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
