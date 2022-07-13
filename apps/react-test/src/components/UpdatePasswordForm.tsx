import {useState} from 'react'
import {Button} from 'components/Button'
import {Input} from 'components/Input'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

export const UpdatePasswordForm: FC = (props) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmedNewPassword, setConfirmedNewPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [cookies, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  // eslint-disable-next-line solid/components-return-once
  return (
    <form className="flex flex-col items-center p-10" onSubmit={onSubmit}>
      <Input
        placeholder="Password"
        type="text"
        value={password}
        handleChange={setPassword}
      />
      <div>기존 패스워드를 입력하세요</div>
      <Input
        placeholder="New password"
        type="text"
        value={newPassword}
        handleChange={setNewPassword}
      />
      <div>
        6 글자이상 1개 이상 기호 포함 대소문자 숫자 1개 이상 포함 패스워드를
        입력하세요
      </div>
      <Input
        placeholder="New password again"
        type="text"
        value={confirmedNewPassword}
        handleChange={setConfirmedNewPassword}
      />
      <div>다시한번 패스워드를 입력해주세요</div>
      <Button>update password</Button>
    </form>
  )

  async function onSubmit(event) {
    event.preventDefault()
    if (newPassword !== confirmedNewPassword) {
      setErrorMsg('입력한 패스워드가 일치하지 않습니다')
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
    const rep = await fetch(
      'http://playground-719591487.us-west-2.elb.amazonaws.com/rest/auth/update-password',
      requestOptions,
    )
    console.log(rep)
    if (!rep.ok) {
      setErrorMsg('서버에 문제가 생긴것 같습니다')
      return
    }
    // const data = await rep.json()

    navigate('/')
  }
}
