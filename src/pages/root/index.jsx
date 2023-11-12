import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
    <div>Index Page</div>
    <Outlet/>
    </>
  )
}

export default index