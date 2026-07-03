export interface NavItem {
  title: string
  href: string
  icon?: string
  disabled?: boolean
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}
