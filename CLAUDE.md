# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add [컴포넌트명]
```

테스트 프레임워크는 설정되어 있지 않습니다.

## 아키텍처 개요

### 라우팅 구조

```
src/app/
├── (auth)/          # 라우트 그룹 — URL에서 auth 세그먼트 숨김
│   ├── login/       → /login
│   └── register/    → /register
├── dashboard/       # 사이드바 + 메인 콘텐츠 레이아웃
└── page.tsx         # 랜딩 페이지 (/)
```

`(auth)` 라우트 그룹은 URL에 영향을 주지 않으며, 공통 레이아웃 없이 인증 페이지를 묶는 용도입니다.

`dashboard/layout.tsx`는 `md` 브레이크포인트 이상에서 `<Sidebar>`를 표시하는 래퍼 레이아웃입니다.

### TailwindCSS v4

v4는 `tailwind.config.js`가 없는 CSS-first 방식입니다. 모든 테마 변수(색상, 반경 등)는 `src/app/globals.css`에 `@theme` 블록으로 정의됩니다. 새 토큰을 추가할 때는 이 파일을 수정하세요.

### shadcn/ui 설정

- 스타일: `base-nova` (`components.json` 참조)
- 내부적으로 `@base-ui/react`를 사용합니다 (Radix UI가 아님)
- 아이콘: `lucide-react`
- CSS 변수 방식으로 테마 적용

### 상태 관리 패턴

Zustand 스토어 (`@/store/use-app-store.ts`):
- `user: User | null` — 현재 로그인 사용자
- `isLoading: boolean` — 전역 로딩 상태
- 새 전역 상태는 이 스토어를 확장하거나 별도 파일로 추가

### 폼 패턴

모든 폼은 `react-hook-form` + `zod`를 함께 사용합니다. `src/app/(auth)/login/page.tsx`와 `register/page.tsx`를 참조 구현으로 활용하세요.

## 핵심 유틸리티

| 경로 | 용도 |
|------|------|
| `@/lib/utils.ts` | `cn()` — clsx + tailwind-merge 클래스명 병합 |
| `@/lib/constants.ts` | `SITE_NAME`, `NAV_ITEMS`, `DASHBOARD_NAV_ITEMS` |
| `@/types/index.ts` | `NavItem`, `User`, `ApiResponse<T>` 공용 타입 |
| `@/hooks/use-media-query.ts` | `useMediaQuery(query)` 반응형 훅 |

경로 별칭: `@/*` → `./src/*`

## 현재 미구현 항목

인증 로직(NextAuth 등), 데이터베이스(Prisma/Drizzle)는 스텁 상태입니다. `.env.example`을 참고하여 필요 시 추가하세요.
