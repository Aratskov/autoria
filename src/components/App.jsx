import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>} />
        <Route path="catalog" element={<Catalog/>} />
        <Route path="favorites" element={<Favorites/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
