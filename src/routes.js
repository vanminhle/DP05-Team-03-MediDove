import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomePage from "./pages/Home/HomePage"
import Doctor from "./pages/Doctor/Doctor"
import DoctorDetail from "./pages/Doctor/pages/DoctorDetail"
import Departurement from "./pages/Departurement/Departurement"
import DepartmentDetail from "./pages/Departurement/pages/DepartmentDetail/DepartmentDetail"

export const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/doctor",
                element: <Doctor />,
                children: [
                    {
                        path: "/doctor",
                        element: <DoctorDetail />,
                    }
                ]
            },
            {
                path: "/departurement",
                element: <Departurement />,
                children: [
                    {
                        path: "/departurement_detail",
                        element: <DepartmentDetail />,
                    }
                ]
            },
        ]
    }
])