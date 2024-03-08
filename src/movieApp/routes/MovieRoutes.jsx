import { Navigate } from "react-router-dom";
import Home from "../pages/Home";


export const MovieRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];
