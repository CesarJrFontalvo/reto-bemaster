import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthRouters, RoutesAuth } from "../auth/routes";

import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";
import { MovieRoutes } from "../movieApp/routes/MovieRoutes";
import { MovieRouter } from "../movieApp/routes/MovieRouter";



export const AppRouter = () => {

    const status = useCheckAuth();

    if (status == 'checking') {
        return <CheckingAuth />
    }

    const routesConfig = createBrowserRouter([
        status === 'not-authenticated' ?
            ({
                path: "/auth/*",
                // ? Login Y registro
                element: <AuthRouters />,
                children: RoutesAuth,
                errorElement: (<div>error</div>),
            })
            :
            ({
                // ? Movielist App
                path: "/",
                element: (
                    <MovieRouter />
                ),
                children: MovieRoutes,
                errorElement: (<div>error</div>),
            }),
        {
            path: '*',
            element: <Navigate to='/auth/login' />,
        }

    ]);

    return <RouterProvider router={routesConfig} />;
};