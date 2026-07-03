# Next.js Starter Kit

빠른 웹 개발을 위한 Next.js 스타터킷입니다. 새 프로젝트를 시작할 때 반복되는 설정 작업을 없애고 바로 개발에 집중할 수 있습니다.

## 기술 스택

- **Next.js** (App Router)
- **TypeScript**
- **TailwindCSS v4** (CSS-first, config 파일 없음)
- **shadcn/ui** — 접근성 높은 UI 컴포넌트
- **lucide-react** — 아이콘
- **next-themes** — 다크/라이트 모드
- **Zustand** — 전역 상태 관리
- **React Hook Form + Zod** — 폼 유효성 검사
- **sonner** — 토스트 알림

## 포함된 페이지

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 랜딩 | `/` | Hero, Features, CTA 섹션 |
| 대시보드 | `/dashboard` | 통계 카드, 최근 활동 |
| 로그인 | `/login` | Hook Form + Zod 유효성 검사 |
| 회원가입 | `/register` | 비밀번호 확인 포함 |

## 빠른 시작

### 새 프로젝트에 사용하기

**방법 1: GitHub Template**

GitHub에서 "Use this template" 버튼 클릭 → 새 저장소 생성 → clone

**방법 2: degit으로 복사**

```bash
npx degit hwangbyeongjun/claude-nextjs-starterkit my-new-project
cd my-new-project
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인하세요.

## 폴더 구조

```
src/
├── app/
│   ├── (auth)/          # 인증 페이지 (로그인, 회원가입)
│   ├── dashboard/       # 대시보드 레이아웃 및 페이지
│   ├── globals.css      # 전역 스타일 (TailwindCSS v4 + shadcn/ui)
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 랜딩 페이지
├── components/
│   ├── ui/              # shadcn/ui 컴포넌트
│   ├── layout/          # Header, Sidebar, Footer
│   └── common/          # ThemeToggle, Logo
├── hooks/               # 커스텀 React 훅
├── lib/
│   ├── utils.ts         # cn() 유틸리티
│   └── constants.ts     # 사이트명, 메뉴 등 상수
├── store/               # Zustand 스토어
└── types/               # TypeScript 타입 정의
```

## 환경 변수 설정

`.env.example`을 복사하여 `.env.local`을 만들고 값을 채워 주세요.

```bash
cp .env.example .env.local
```

## 새 shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [컴포넌트명]
```

## 빌드

```bash
npm run build
npm run start
```
