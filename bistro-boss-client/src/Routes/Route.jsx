
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Shared/ErrorPage';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';
import PrivateRoute from './PrivateRoute';
import SignUp from '../Pages/SignUp';
import Secret from '../Pages/Secret';
import Dashboard from '../Layouts/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart';
import Login from '../Pages/Login/Login';
import AllUsers from '../Pages/Dashboard/AllUsers';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
              path: '/order/:category',
              element: <Order></Order>
            },
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'signup',
              element: <SignUp></SignUp>
            },
            {
              path: 'secret',
              element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ],
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>, 
      children: [
        {
          path: 'mycart', 
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers', 
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;