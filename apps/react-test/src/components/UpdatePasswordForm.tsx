import {Button} from 'components/Button'
import {Input} from 'components/Input'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import {Spacer} from './Spacer'
import {generatePasswordMsg, isPasswordValid} from '../utils/functions'
import {serverErrors} from '../utils/constants'

type Props = {
  addErrMessage: (err: string) => void
  onClickLoading: (bool: boolean) => void
}

export const UpdatePasswordForm: FC<Props> = (props) => {
  const [password, setPassword] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('기존 패스워드를 입력하세요')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordMsg, setNewPasswordMsg] = useState(
    '6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를 입력하세요',
  )
  const [confirmedNewPassword, setConfirmedNewPassword] = useState('')
  const [cookies] = useCookies(['user'])
  const navigate = useNavigate()
  const isBtnDisable =
    !isPasswordValid(password) ||
    !isPasswordValid(newPassword) ||
    confirmedNewPassword === ''

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setPasswordMsg(generatePasswordMsg(event.target.value))
  }

  const handleNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
    setNewPasswordMsg(generatePasswordMsg(event.target.value))
  }

  const handleConfirmedNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmedNewPassword(event.target.value)
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newPassword !== confirmedNewPassword) {
      props.addErrMessage('입력한 패스워드가 일치하지 않습니다')
      return
    }
    const requestOptions = {
      body: JSON.stringify({newPassword, password}),
      headers: {
        Authorization: `Bearer ${cookies.user.token}`,
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    }
    props.onClickLoading(true)
    const rep = await fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/update-password',
      requestOptions,
    )
    props.onClickLoading(false)
    if (!rep.ok) {
      props.addErrMessage(serverErrors[rep.status])
      return
    }
    navigate('/')
  }

  return (
    <form className="flex flex-col items-center p-10" onSubmit={onSubmit}>
      <div className="w-80">
        <Input
          placeholder="Password"
          type="text"
          value={password}
          handleChange={handlePassword}
        />
        <div className="self-start pl-4 pt-1 text-gray-100 text-xs">
          {passwordMsg}
        </div>
      </div>
      <Spacer space={10} />
      <div className="w-80">
        <Input
          placeholder="New password"
          type="text"
          value={newPassword}
          handleChange={handleNewPassword}
        />
        <p className="self-start pl-4 pt-1 text-gray-100 text-xs break-words">
          {newPasswordMsg}
        </p>
      </div>
      <Spacer space={10} />
      <div className="w-80">
        <Input
          placeholder="New password again"
          type="text"
          value={confirmedNewPassword}
          handleChange={handleConfirmedNewPassword}
        />
        <div className="self-start pl-4 pt-1 text-gray-100 text-xs">
          다시한번 패스워드를 입력해주세요
        </div>
      </div>
      <Spacer space={10} />
      <Button disable={isBtnDisable}>update password</Button>
    </form>
  )
}
