import { lazy } from "react";

export const DashboardPage = lazy(() => import("../page/Dashboard"));
export const NotFoundPage = lazy(() => import("../pages/NotFound"));
export const SignInPage = lazy(() => import("../pages/Auten"));
export const VerifyOtpPage = lazy(() => import("@pages/VerifyOtp"));
