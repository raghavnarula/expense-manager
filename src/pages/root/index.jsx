import { Link, Outlet } from "react-router-dom";

const index = () => {
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