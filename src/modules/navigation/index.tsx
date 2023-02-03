import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../home';
import DetailPaige from '../details/detailPage';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Routes>
    <Route element={<HomePage />} path={`/${APP_KEYS.ROUTER_KEYS.HOME}`} />
    <Route element={<DetailPaige />} path={`/${APP_KEYS.ROUTER_KEYS.DETAILS}/:id`} />
  </Routes>
);