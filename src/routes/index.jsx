import Layout from '@/components/layouts';
import LandingPage from '@/pages/Landing';
import AirdropPage from '@/pages/Airdrop';

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
        path: '/airdrop',
        element: <AirdropPage />,
      },
    ],
  },
];
