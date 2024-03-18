// @ts-ignore
import FacebookLogin from 'react-facebook-login'

const Test = () => {
  const responseFacebook = (response: any) => {
    console.log(response);
  }
  return (
    <div>
      <FacebookLogin
    appId={import.meta.env.VITE_FACEBOOK_APP_I}
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />,
    </div>
  )
}

export default Test