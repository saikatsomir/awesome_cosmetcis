import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Layout/Main';
import { Home } from '../Components/Pages/Home/Home';
import { Cart } from '../Components/Pages/Cart/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
