# Foo Bar Project

Meta Z 프론트 / 백엔드 문제

## 시작하기 (공용)

디벤던시 설치 (프로젝트 루트에서 설치하세요)
```shell
pnpm install
```

## 프론트 문제 (WIP)

### 저장소 설명

- ./apps/react-test : React 로 테스트를 수행하려면 이 폴더를 사용 하세요 (준비중)
- ./apps/vue-test : Vue 로 테스트를 수행하려면 이 폴더를 사용 하세요
- ./apps/solid-test : SolidJs 로 테스트를 수행하려면 이 폴더를 사용 하세요 (준비중)

각 폴더 리드미에서 추가 실행 방법을 확인하세요

### 문제 내용

로그인과 회원 가입 페이지를 아래 디자인 링크 내용대로 만듭니다 \
각 React, Vue, SolidJs 폴더에는 스타일링 방법과 컴포넌트 세트 라이브러리가 미리 설치되어 있습니다 원하시는 다른 방법으로 스타일링하며 컴포넌트를 작성 하셔도 됩니다 \
백엔드는 아래 백엔드 주소를 사용하세요

- 디자인 링크 > `Todo 준비중`

- 백엔드 주소 >
    - REST
      - url: https://
      - swagger: http://localhost
    - GraphQl
      - url: https://graphql
      - playground: http://localhost

미리 설치된 컴포넌트 세트 라이브러리

- React : [chakra-ui](https://chakra-ui.com/), [emotion](https://emotion.sh/docs/introduction)
- Vue :  [headless-ui](https://headlessui.dev/) , [tailwind](https://tailwindcss.com/)
- SolidJs : [hope-ui](https://hope-ui.com/), [stitches](https://stitches.dev/)

## 백엔드 문제 (WIP)

각 모노레포 실행 방법은 Pnpm https://pnpm.io/ko/filtering#--filter-package_name 참조

### 저장소 설명

- ./apps/nest-test : nest-api 로 테스트를 수행하려면 이 폴더를 사용 하세요
- ./apps/express-test : express 로 테스트를 수행하려면 이 폴더를 사용 하세요
- ./apps/type-graphql-test : type-graphql 로 테스트를 수행하려 이 폴더를 사용하세요

각 폴더 리드미에서 추가 실행 방법을 확인하세요

### 문제 내용

로그인과 회원 가입 페이지를 위해 백엔드 서비스를 만듭니다 아래 명령어를 실행하여 e2e 테스트를 통과 하여야 합니다.

- nestjs 로 만들 경우
```shell
pnpm run test:nest
```

- express 로 만들 경우
```shell
pnpm run test:express
```

- type-graphql 로 만들 경우
```shell
pnpm run test:type-graphql
```

## 발생 할 수 있는 문제 상황

- pnpm 이 없어요
  - npm i -g pnpm 을 실행해 주세요
