import {Button} from 'components/Button'
import {Input} from 'components/Input'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import {Spacer} from './Spacer'
import {
  generateEmailMsg,
  generatePasswordMsg,
  isEmailValid,
  isPasswordValid,
} from '../utils/functions'
import {serverErrors} from '../utils/constants'

type Props = {
  addErrMessage: (err: string) => void
  onClickLoading: (bool: boolean) => void
}

export const SignInForm: FC<Props> = (props) => {
  const [email, setEmail] = useState('')
  const [emailMsg, setEmailMsg] = useState('이메일을 입력하세요')
  const [password, setPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState(
    '6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를 입력하세요',
  )
  const [, setCookie] = useCookies(['user'])
  const navigate = useNavigate()
  const isBtnDisable = !isEmailValid(email) || !isPasswordValid(password)

  // eslint-disable-next-line solid/components-return-once
  return (
    <form className="flex flex-col items-center p-10" onSubmit={onSubmit}>
      <Input
        placeholder="Email"
        type="text"
        value={email}
        handleChange={handleEmail}
      />
      <div className="self-start pl-4 pt-1 text-gray-100 text-xs">
        {emailMsg}
      </div>
      <Spacer space={10} />
      <Input
        placeholder="Password"
        type="text"
        value={password}
        handleChange={handlePassword}
      />
      <div className="self-start pl-4 pt-1 text-gray-100 text-xs">
        {passwordMsg}
      </div>
      <Spacer space={10} />
      <Button disable={isBtnDisable}>Sign In</Button>
    </form>
  )

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
    setEmailMsg(generateEmailMsg(event.target.value))
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
    setPasswordMsg(generatePasswordMsg(event.target.value))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const requestOptions = {
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
    props.onClickLoading(true)
    const rep = await fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/sign-in',
      requestOptions,
    )
    props.onClickLoading(false)
    if (!rep.ok) {
      props.addErrMessage(serverErrors[rep.status])
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
