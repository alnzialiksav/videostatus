import React from 'react'

const Home = React.lazy(() => import('./component/Home'));
const VideoBlog = React.lazy(() => import('./component/Common/VideoBlog'));
const Categories = React.lazy(() => import("./pages/Categories"));
const Video = React.lazy(() => import("./component/Video"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: Home, exact: true },
  { path: '/category/:id', name: 'VideoBlog', component: VideoBlog, exact: true },
  { path: '/:category', name: 'Categories', component: Categories, exact: true },
  { path: '/watch/:id', name: 'PlayVideo', component: Video , exact: true },
];

export default routes;

