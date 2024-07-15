import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {routes} from "./routes";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Review = lazy(() => import("../pages/reviews"));

// const router = createBrowserRouter([
//   {
//     path: routes.home,
//     element: <Home />,
//     loader: () => <div>loading homepage...</div>,
//   },
//   {
//     path: routes.reviews(),
//     element: <Review />,
//     loader: () => <div>loading reviews...</div>,
//   },
//   {
//     path: "*",
//     element: <div>404</div>,
//   },
// ]);

// export default function Router() {
//   return <RouterProvider router={router} />;
// }

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.reviews()} element={<Review />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
