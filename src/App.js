import './index.css';
import Footer from './layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header/Header'

function App() {
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
