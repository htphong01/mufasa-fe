import Layout from '@/components/layouts';
import LandingPage from '@/pages/Landing';
import AirdropPage from '@/pages/Airdrop';
import ComingSoonPage from '../pages/ComingSoon';

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
      {
        path: '/forest',
        element: <ComingSoonPage />,
      },
    ],
  },
];
