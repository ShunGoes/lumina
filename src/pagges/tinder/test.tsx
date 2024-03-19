import { displayName } from "react-tinder-card"
import { signInWithFacebookPopup } from "../../utils/firebase/firebase.config"

const Test = () => {
 const facebook_login = async () => {
  const response = await signInWithFacebookPopup()
  const {displayName} = response.user
  console.log(displayName)
  console.log(response)
  
 }
  return (
    <div>
      <button onClick={facebook_login}>
      log in with facebook
      </button>
      <p>
        {displayName}
      </p>
    </div>
  )
}

export default Test