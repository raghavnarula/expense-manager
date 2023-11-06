import {auth,provider} from '../../config/firebase-config'
import { signInWithPopup } from "firebase/auth";
import { useCookies } from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import './styles.css'


const Auth = () => {
    const [cookies, setCookie] = useCookies(["cookie-name"])
    const navigate = useNavigate();
    const signInWithGoogle = async ()=>{
        const results = await signInWithPopup(auth,provider)
        console.log(results)
        setCookie('userID',results.user.uid)
        setCookie('name',results.user.displayName)
        setCookie('profilePhoto',results.user.photoURL)
        setCookie('isAuth',true)
        navigate('/expenses')
    }
    return (
        <div className="login-page">
          <p>Sign In With Google to Continue</p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            {" "}
            Sign In With Google
          </button>
        </div>
      );
}

export default Auth;