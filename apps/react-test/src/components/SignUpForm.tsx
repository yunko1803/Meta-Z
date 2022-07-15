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
import {serverErrors} from 'src/utils/constants'

type Props = {
  addErrMessage: (err: string) => void
  onClickLoading: (bool: boolean) => void
}

export const SignUpForm: FC<Props> = (props) => {
  const [email, setEmail] = useState('')
  const [emailMsg, setEmailMsg] = useState('이메일을 입력하세요')
  const [password, setPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState(
    '6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를 입력하세요',
  )
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [, setCookie] = useCookies(['user'])
  const navigate = useNavigate()
  const isBtnDisable = !isEmailValid(email) || !isPasswordValid(password)

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setEmailMsg(generateEmailMsg(event.target.value))
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setPasswordMsg(generatePasswordMsg(event.target.value))
  }

  const handleConfirmedPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmedPassword(event.target.value)
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== confirmedPassword) {
      props.addErrMessage('입력한 패스워드가 일치하지 않습니다')
      return
    }
    const requestOptions = {
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
    props.onClickLoading(true)
    const rep = await fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/sign-up',
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

  return (
    <form className="flex flex-col items-center p-10" onSubmit={onSubmit}>
      <div className="w-80">
        <Input
          placeholder="Email"
          type="text"
          value={email}
          handleChange={handleEmail}
        />
        <div className="self-start pl-4 pt-1 text-gray-100 text-xs">
          {emailMsg}
        </div>
      </div>
      <Spacer space={10} />
      <div className="w-80">
        <Input
          placeholder="Password"
          type="text"
          value={password}
          handleChange={handlePassword}
        />
        <p className="self-start pl-4 pt-1 text-gray-100 text-xs break-words">
          {passwordMsg}
        </p>
      </div>
      <Spacer space={10} />
      <div className="w-80">
        <Input
          placeholder="Write your password again"
          type="text"
          value={confirmedPassword}
          handleChange={handleConfirmedPassword}
        />
        <div className="self-start pl-4 pt-1 text-gray-100 text-xs">
          확인을 위해 한번더 입력해 주세요
        </div>
      </div>
      <Spacer space={10} />
      <Button disable={isBtnDisable}>Sign Up</Button>
    </form>
  )
}
