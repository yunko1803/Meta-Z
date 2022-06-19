# Front End Test

### 저장소 설명

- ./apps/react-test : React 로 테스트를 수행하려면 이 폴더를 사용 하세요 (WIP)
- ./apps/vue-test : Vue 로 테스트를 수행하려면 이 폴더를 사용 하세요 (WIP)
- ./apps/solid-test : SolidJs 로 테스트를 수행하려면 이 폴더를 사용 하세요 (WIP)

### 문제 내용

로그인과 회원 가입 페이지를 아래 디자인 링크 내용대로 만듭니다 \
이미 보일러플레이트가 작성 되어있습니다 작성된 보일러플레이를 이용하여 아래 스팩을 구현하세요 가적 보일러플레이트 코드 추가나 보일러플레이트에 오류가 있다면 해결 하셔도 좋습니다
각 보일러플레이트 React, Vue, SolidJs 폴더에는 스타일링 방법과 컴포넌트 세트 라이브러리가 미리 설치되어 있습니다 원하시는 다른 방법으로 스타일링하며 컴포넌트를 작성 하셔도 됩니다 \

#### 스팩

백엔드는 아래 백엔드 주소를 사용하세요

화면 구현은 디자인 링크를 보고 구현해주세요 

- 디자인 링크 > [Figma Link](https://www.figma.com/file/rRh6du4JPZclkiuBqLS6xX/Fornt-End-Test?node-id=0%3A1)

- 백엔드 주소 >
    - REST
        - url: http://54.188.193.175:3000/rest
          - (POST) /rest/auth/sign-in
            - req.body {email: '<string>', password: '<string>'} 
            - res 401 {email: '<string>'}
            - res 404 {email: '<string>'}
            - res 200 {email: '<string>', name: '<string>', token: '<string>'}
          - (POST) /rest/auth/sign-up
            - req.body {email: '<string>', password: '<string>'}
            - res 409 {email: '<string>'}
            - res 201 {email: '<string>', name: '<string>', token: '<string>'}
          - (PATCH) /rest/auth/update-password
            - {password: '<string>', newPassword: '<string>'}
            - res 404 {email: '<string>'}
            - res 401 {email: '<string>'}
            - res 200 {email: '<string>'}
    - GraphQl
        - url: http://54.188.193.175:3000/graphql
        - playground: http://54.188.193.175:3000/graphql

미리 설치된 컴포넌트 세트 라이브러리

- React : [chakra-ui](https://chakra-ui.com/), [emotion](https://emotion.sh/docs/introduction)
- Vue :  [headless-ui](https://headlessui.dev/) , [tailwind](https://tailwindcss.com/)
- SolidJs : [hope-ui](https://hope-ui.com/), [stitches](https://stitches.dev/)

<< [README.md](README.md)
