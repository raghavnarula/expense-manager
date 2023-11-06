import {Navigate} from "react-router-dom"
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({children}) => {
    const [cookies] = useCookies(['cookie-name']);

    if(!cookies.isAuth) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    
    return children

};

export default ProtectedRoute;