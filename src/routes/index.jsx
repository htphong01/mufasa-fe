import Layout from '@/components/layouts';
import LandingPage from '@/pages/Landing';
import ClaimPage from '@/pages/Claim';

export const userRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/claim',
        element: <ClaimPage />,
      },
    ],
  },
];
