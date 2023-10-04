import Auth from "./page/Auth";
import Users from "./page/Users";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, USERS_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: USERS_ROUTE,
    Component: Users
  }
];
