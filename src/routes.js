import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home/HomePage';
import DoctorDetail from './pages/Doctor/pages/DoctorDetail';
import Departurement from './pages/Departurement/Department';
import DepartmentDetail from './pages/Departurement/pages/DepartmentDetail/DepartmentDetail';
import DoctorOne from './pages/Doctor/DoctorOne/DoctorOne';

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
        element: <DoctorOne />,
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
