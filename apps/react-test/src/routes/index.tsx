import {lazy} from 'react'
import {RouteObject} from 'react-router-dom'

const MainLayout = lazy(() => import('layouts/main-layout/Index'))
const Main = lazy(() => import('pages/Main'))
const Sign = lazy(() => import('pages/Sign'))

export const routes: RouteObject[] = [
  {
    children: [
      {
        element: <Main />,
        index: true,
      },
      {
        element: <Sign />,
        path: 'sign',
      },
    ],
    element: <MainLayout />,
    path: '/',
  },
]
