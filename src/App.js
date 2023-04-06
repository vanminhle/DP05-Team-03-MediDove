import './index.css';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';
import DoctorOne from './pages/Doctor/DoctorOne/DoctorOne';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <DoctorOne />
      </main>
      <Footer />
    </>
  );
}

export default App;
