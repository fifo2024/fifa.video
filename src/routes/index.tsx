import React, { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    RouteObject,
} from "react-router-dom";
// import ProtectedRoute from "./protectedRoute";
import Layout from "src/layouts";

const Home = lazy(() => import("src/modules/Home"));
const WorldCup = lazy(() => import("src/modules/WorldCup"));
const EuropeCup = lazy(() => import("src/modules/EuropeCup"));
const AmericaCup = lazy(() => import("src/modules/AmericaCup"));
const Page404 = lazy(() => import("src/modules/Page404"));

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/world-cup",
                element: <WorldCup />,
            },
            {
                path: "/europe-cup/*",
                element: <EuropeCup />,
            },
            {
                path: "/america-cup/*",
                element: <AmericaCup />,
            },
        ],
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

const browserRouter = createBrowserRouter(routes);

export default () => (
    <Suspense fallback={null}>
        <RouterProvider
            router={browserRouter}
            fallbackElement={<p>Initial Load...</p>}
        />
    </Suspense>
);
