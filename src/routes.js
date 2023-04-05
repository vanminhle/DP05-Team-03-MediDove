import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home/HomePage';
import Doctor from './pages/Doctor/Doctor';
import DoctorDetail from './pages/Doctor/pages/DoctorDetail';
import Departurement from './pages/Departurement/Department';
import DepartmentDetail from './pages/Departurement/pages/DepartmentDetail/DepartmentDetail';

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/doctor',
        children: [
          {
            element: <Doctor />,
          },
          {
            path: 'doctor_detail',
            element: <DoctorDetail />,
          },
        ],
      },
      {
        path: '/departurement',
        children: [
          {
            element: <Departurement />,
          },
          {
            path: 'departurement_detail',
            element: <DepartmentDetail />,
          },
        ],
      },
    ],
  },
]);
