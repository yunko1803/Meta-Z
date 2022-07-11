import {useState} from 'react'
import {Button} from 'components/Button'
import {Input} from 'components/Input'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

export const SignUpForm: FC = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [cookies, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  // eslint-disable-next-line solid/components-return-once
  return (
    <form className="flex flex-col items-center p-10" onSubmit={onSubmit}>
      <Input
        placeholder="Email"
        type="text"
        value={email}
        handleChange={setEmail}
      />
      <div>이메일을 입력하세요</div>
      <Input
        placeholder="Password"
        type="text"
        value={password}
        handleChange={setPassword}
      />
      <div>
        6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를
        입력하세요
      </div>
      <Input
        placeholder="Write your password again"
        type="text"
        value={confirmedPassword}
        handleChange={setConfirmedPassword}
      />
      <div>확인을 위해 한번더 입력해 주세요</div>
      <Button>Sign Up</Button>
    </form>
  )

  async function onSubmit(event) {
    event.preventDefault()
    if (password !== confirmedPassword) {
      setErrorMsg('입력한 패스워드가 일치하지 않습니다')
      return
    }
    const requestOptions = {
      body: JSON.stringify({email, password}),
      credentials: 'include' as RequestCredentials,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
    const rep = await fetch('/server/rest/auth/sign-up', requestOptions)
    if (!rep.ok) {
      setErrorMsg('서버에 문제가 생긴것 같습니다')
      return
    }
    const data = await rep.json()
    const userData = {
      email: data.email,
      token: data.token,
    }

    setCookie('user', userData, {
      path: '/',
    })

    navigate('/')
  }
}
