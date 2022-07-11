import {lazy} from 'react'
import {RouteObject} from 'react-router-dom'

const MainLayout = lazy(() => import('layouts/main-layout/Index'))
const Main = lazy(() => import('pages/Main'))
const SignUp = lazy(() => import('pages/SignUp'))
const SignIn = lazy(() => import('pages/SignIn'))
const UpdatePassword = lazy(() => import('pages/UpdatePassword'))

export const routes: RouteObject[] = [
  {
    children: [
      {
        element: <Main />,
        index: true,
      },
      {
        element: <SignUp />,
        path: 'sign-up',
      },
      {
        element: <SignIn />,
        path: 'sign-in',
      },
      {
        element: <UpdatePassword />,
        path: 'update-password',
      },
    ],
    element: <MainLayout />,
    path: '/',
  },
]
