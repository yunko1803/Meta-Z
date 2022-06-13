# Bank End Test


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
