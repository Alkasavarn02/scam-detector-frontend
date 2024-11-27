import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as ROUTES from './constants/routes';

// Lazy importing of components
const LoginScreen = React.lazy(() => import('./screens/LoginScreen'));
const DashboardScreen = React.lazy(() => import('./screens/DashboardScreen'));

const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<LoginScreen />} />
            <Route path={ROUTES.LOGIN} element={<LoginScreen />} />
            <Route path={ROUTES.DASHBOARD} element={<DashboardScreen/>} />
            <Route path='/scam-list' element={<DashboardScreen screen="scam-list"/>} />
            <Route path='*' element={<Navigate to={ROUTES.HOME} replace={true} />} />
        </Routes>
    );
};

export default AppRouter;