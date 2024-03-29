import App from './App';
import Home from './components/Home/Home';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        exact: true,
        path: '/',
      },
      {
        ...Home,
        exact: true,
        path: '/:id',
      },
    ],
  },
];
