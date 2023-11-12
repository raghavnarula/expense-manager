import { Link, Outlet, useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>Login To Access the Page!</div>
    <Link to="../">
    <button>Sign In</button>
    </Link>
    <Outlet/>
    </>
  )
}

export default index