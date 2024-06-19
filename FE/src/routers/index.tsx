import { Navigate, Outlet, useRoutes } from "react-router-dom";

import {
  DashboardPage,
  SignInPage,
  VerifyOtpPage,
  NotFoundPage,
} from "./LazyPages";
import { AuthLayout, GuestLayout } from "../layouts";
import { routing } from "./routing";
import { AuthGuard, GuestGuard } from "../components";
import { LoadingScreen, SplashScreen } from "../components/LoadingScreen";
import { Suspense } from "react";

const Routers = () =>
  useRoutes([
    {
      element: (
        <GuestGuard>
          <GuestLayout>
            <Suspense fallback={<SplashScreen />}>
              <Outlet />
            </Suspense>
          </GuestLayout>
        </GuestGuard>
      ),
      children: [
        {
          path: routing.LOGIN,
          element: <SignInPage />,
        },
        {
          path: routing.VERIFY_OTP,
          element: <VerifyOtpPage />,
        },
      ],
    },
    {
      path: routing.NOT_FOUND,
      element: <NotFoundPage />,
    },
    {
      element: (
        <AuthGuard>
          <AuthLayout>
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        </AuthGuard>
      ),
      children: [
        {
          path: routing.DASHBOARD,
          element: <DashboardPage />,
        },

        // Wallets
      ],
    },
    {
      path: "/*",
      element: <Navigate to={routing.NOT_FOUND} />,
    },
  ]);

export default Routers;
