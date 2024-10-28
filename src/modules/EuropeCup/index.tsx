import React, { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    RouteObject,
    Routes,
    Router,
    useRoutes,
} from "react-router-dom";
// import ProtectedRoute from "./protectedRoute";
import Layout from "src/layouts";

const EuropeCupIndex = lazy(
    () => import("src/modules/EuropeCup/EuropeCupIndex")
);
const EuropeCupYear = lazy(() => import("src/modules/EuropeCup/EuropeCupYear"));
const EuropeCupMatch = lazy(
    () => import("src/modules/EuropeCup/EuropeCupMatch")
);
const Page404 = lazy(() => import("src/modules/Page404"));

export const routes: RouteObject[] = [
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <EuropeCupIndex />,
            },
            {
                path: "/:year",
                element: <EuropeCupYear />,
            },
            {
                path: "/:year/:matchId",
                element: <EuropeCupMatch />,
            },
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

export default () => {
    const browserRouter = useRoutes(routes);
    return <Suspense fallback={null}>{browserRouter}</Suspense>;
};
