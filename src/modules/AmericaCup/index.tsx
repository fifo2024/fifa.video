import React, { lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const AmericaCupIndex = lazy(
    () => import("src/modules/AmericaCup/AmericaCupIndex")
);
const AmericaCupYear = lazy(
    () => import("src/modules/AmericaCup/AmericaCupYear")
);
const AmericaCupMatch = lazy(
    () => import("src/modules/AmericaCup/AmericaCupMatch")
);
const Page404 = lazy(() => import("src/modules/Page404"));

export const routes: RouteObject[] = [
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <AmericaCupIndex />,
            },
            {
                path: "/:year",
                element: <AmericaCupYear />,
            },
            {
                path: "/:year/:matchId",
                element: <AmericaCupMatch />,
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
