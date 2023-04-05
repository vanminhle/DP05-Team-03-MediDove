import React from 'react';
import { useLocation } from 'react-router-dom';
import { FooterHome } from './Components/FooterHome/FooterHome';
import { FooterDefault } from './Components/FooterDefault/FooterDefault';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return <>{isHome ? <FooterHome /> : <FooterDefault />}</>;
}
