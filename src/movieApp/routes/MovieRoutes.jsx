import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { ContentCategory } from "../pages/ContentCategory";
import { ContentDetails } from "../pages/ContentDetails";


export const MovieRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/categori",
        element: <ContentCategory />
    },
    {
        path: "/detail/:id",
        element: <ContentDetails />
    },
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];
