import React from 'react'

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Categories= React.lazy(() => import('./pages/categories'));

const routes = [
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: './pages/categories', exact: true, name: 'Category' },
]
export default routes
