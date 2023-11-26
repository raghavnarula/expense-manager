import {auth,provider} from '../../config/firebase-config.js'
import { signInWithPopup } from "firebase/auth";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
import './styles.css'

const Auth = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async ()=>{
        const results = await signInWithPopup(auth,provider)
        Cookies.set('userID',results.user.uid,{ expires: 7 })
        Cookies.set('name',results.user.displayName,{ expires: 7 })
        Cookies.set('profilePhoto',results.user.photoURL,{ expires: 7 })
        Cookies.set('isAuth',true,{ expires: 7 })
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