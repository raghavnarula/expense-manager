import Auth from './pages/auth/'
import ExpenseTracker from './pages/expense-tracker/index'
import { useRouteError } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/root/index'

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth/>,
    },
    {
      path: "/expenses",
      element:<ExpenseTracker/>,
      errorElement: <Root />,
    },
    {
      path: "/root",
      element: <Root />,
      children: [
        {
          path: "final",
          element: <div>Hello World</div>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;