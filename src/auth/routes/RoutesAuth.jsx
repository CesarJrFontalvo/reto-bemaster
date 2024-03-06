import { Navigate } from "react-router-dom";
import { LoginPages, RegisterPages } from "../pages";


export const RoutesAuth = [
  {
    path: 'login',
    element: <LoginPages />,
  },
  {
    path: 'register',
    element: <RegisterPages />,
  },
  {
    path: '*',
    element: <Navigate to='/auth/login' />,
  }
];

