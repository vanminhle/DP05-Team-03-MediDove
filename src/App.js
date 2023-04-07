import './index.css';
import Footer from './layouts/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './layouts/Header/Header'
import React from 'react'

function App() {

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default App;
