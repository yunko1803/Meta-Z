# Bank End Test

### 저장소 설명

- ./apps/nest-test : nest-api 로 테스트를 수행하려면 이 폴더를 사용 하세요 
  - dev script `pnpm run --filter @foo-bar-project/nest-test dev`
  - build script `pnpm run --filter @foo-bar-project/nest-test build`
  - start script `pnpm run --filter @foo-bar-project/nest-test start`
- ./apps/express-test : express 로 테스트를 수행하려면 이 폴더를 사용 하세요
  - dev script `pnpm run --filter @foo-bar-project/express-test dev`
  - build script `pnpm run --filter @foo-bar-project/express-test build`
  - start script `pnpm run --filter @foo-bar-project/express-test start`

각 폴더 리드미에서 추가 실행 방법을 확인하세요

### 문제 내용

로그인과 회원 가입 페이지를 위해 백엔드 서비스를 만듭니다
이미 보일러플레이트가 작성 되어있습니다 작성된 보일러플레이를 이용하여 아래 스팩을 구현하세요 추가 보일러플레이트 코드 추가나 보일러플레이트에 오류가 있다면 해결 하셔도 좋습니다

#### 스팩

- jwt token 로 사용자 인증을 유지합니다. token 은 Authorization header 에 추가하여 인증이 필요한 api 를 사용합니다
- /auth/sign-in 는 (Post) 에 body json {email: '...', password: '...'} 를 받아 {token: '[jwt token]', email: '...'} 을 응답 합니다.
- /auth/sign-up 은 (Post) 에 body json {email: '...', password: '...'} 를 받아 {token: '[jwt token]', email: '...'} 을 응답 합니다. email 이 없다면 유저를 새로 만들고 있다면 만들지 않고 오류를 응답 합니다
- /auth/update-name (Patch) 에 body json {name: '...'} 를 받아 {name: '...', email: '...'}을 응답합니다 올바른 jwt token 이 Authorization header 에 있어야 응답하고 없다면 인증 오류를 응답합니다 응답전에 오류가 없다면 입력 받은 이름으로 유저 이름을 변경 합니다.

스팩에 맞게 e2e 테스트를 작성하고 아래 명령어를 실행하여 e2e 테스트를 통과 하여야 합니다.
unit 테스트를 한다면 더욱 좋습니다

원하는 DATABASE 를 사용하세요 (로컬 환경)

- e2e and unit test
```shell
pnpm run test
```

<< [README.md](README.md)
