import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home/HomePage';
import Departurement from './pages/Departurement/Department';
import DepartmentDetail from './pages/Departurement/pages/DepartmentDetail/DepartmentDetail';
import DoctorDetail from './pages/Doctor/pages/DoctorDetail/DoctorDetail';
import DoctorOne from './pages/Doctor/pages/DoctorOne/DoctorOne';

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
            path: '',
            element: <DoctorOne />,
          },
          {
            path: 'doctor_detail',
            element: <DoctorDetail />,
          },
        ],
      },
      {
        path: 'department',
        children: [
          {
            path: '',
            element: <Departurement />,
          },
          {
            path: 'department_detail',
            element: <DepartmentDetail />,
          },
        ],
      },
    ],
  },
]);
