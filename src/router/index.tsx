import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute{
  path: string;
  element: React.ReactElement;
}

export enum RouteNames{
  LOGIN = '/login',
  EVENT = '/',
  OTHER = '*',
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.LOGIN, element: <Login/>},
  {path: RouteNames.OTHER, element: <Login/>}
]

export const privateRoutes: IRoute[] = [
  {path: RouteNames.EVENT, element: <Event/>},
  {path: RouteNames.OTHER, element: <Event/>}
]