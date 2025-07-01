## 프로젝트 개요

React와 Vite 기반의 환경에서 개발했으며
스타일링은 Tailwindcss,
상태관리는 Zustand를 활용했습니다.
책 리스트는 페이지네이션 라이브러리를 활용하여 리스트를 표출하도록 구현했습니다.
UI, theme는 피그마를 참조해 1920\*1080 사이즈, text와 color를 세팅했습니다

## 실행 방법 및 환경 설정

```bash
# 저장소 클론
git clone https://github.com/kigpand/cdri-books-kimjihun

# 의존성 설치
npm install
# 또는
yarn
# 또는
pnpm install

# 개발 서버 실행
npm run dev
# 또는
yarn dev
# 또는
pnpm dev

# 환경 변수
VITE_KAKAO_API_KEY=KAKAO API KEY
VITE_KAKAO_API_URL=https://dapi.kakao.com/v3/search/book
```

## 폴더 구조

```
src/
├── api/                # API 호출 관련 파일
├── assets/             # 이미지 등 정적 자산
├── components/         # 재사용 가능한 컴포넌트
│   ├── common/         # 공통으로 쓰일 컴포넌트
│   └── search/         # 검색페이지용 컴포넌트
├── constants/          # 상수 정의 파일
├── hooks/              # custom hook 관리
│   ├── common/         # 공통, 상태관리용 hook
│   └── api/            # API 호출 관련 hook
├── layout/             # Layout 관련 컴포넌트
├── pages/              # Route page 컴포넌트
└── store/              # 상태 관리 저장소
```

## 주요 코드

### 1. `src/hooks/api/kakao.ts`

- 도서 API 호출 관련 hook
- enabled, staleTime을 활용해 캐시, 불필요한 검색 방지

### 2. `src/hooks/common/useBookmark.ts`

- 찜목록 관련 hook
- 추가/제거/체크 기능이 명확하게 분리되어 사용하기 편하도록 구현
- 내부적으로 Zustand와 localStorage를 활용한 persist설정을 사용하여 새로고침에도 데이터 유지

### 3. `src/components/search/DetailSearchForm.tsx`

- 상세 검색 조건 입력 UI 컴포넌트
- 저자, 출판사 중 하나의 타겟을 선택하고 키워드를 입력할 수 있는 Select + Input 조합
- 검색 버튼 클릭 시 상위 컴포넌트로 콜백 전달

## 라이브러리 선택 이유

### 1. Zustand

- 가볍고 보일러플레이트가 적어 사용성에 있어서 좋다고 느꼈습니다.
- persist를 활용하여 localstorage에 접근해서 저장/조회/삭제하기 편해 요청하신 검색어리스트, 찜목록 구현에 수월하다고 생각했습니다.

### 2. Tailwind css

- theme 세팅이 가장 수월하고 편하다고 생각했고 주어진 UI가 복잡한 패턴이 없어 단순 반복이 편한 tailwindcss를 선택했습니다.

### 3. react-paginate

- 리스트를 처리하는 방법에 있어 고민하다가 가장 사용자 친화적이라고 생각해 pagination으로 처리를 했습니다.
- 많은 pagination 라이브러리 중 해당 라이브러리를 선택한 이유는 tailwind와 조합하기 가장 좋다고 생각했고 page값을 받아와 api와 연동하기 편하다고 생각해서 선택했습니다

## 강조 하고 싶은 기능

요청하신 요구사항을 크게 벗어난 기능이 없어 명시되지 않았던 페이지네이션 기능말고는 강조할만한 기능은 없는거 같습니다.
