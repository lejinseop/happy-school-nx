import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './dashboard';

const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};

export default Pages;
