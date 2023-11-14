import { Route, Routes } from 'react-router-dom';

import { Home } from 'app/home/Home';
import { Layout } from 'app/layout/Layout';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<Layout />}>
      <Route path={AppRoute.home} element={<Home />} />
    </Route>
  </Routes>
);
