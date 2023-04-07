import React from 'react';
import SectionTeam from './components/sectionTeam/SectionTeam';
import OurPlan from './components/OurPlan/OurPlan';
import TrustUs from './components/TrustUs/TrustUs';
import News from './components/News/News';
import SectionAvailable from './components/sectionAvailable247/SectionAvailable';
import SectionDepartment from './components/sectionDepartsHome/SectionDepartment';
import Banner from './components/Banner/Banner'
import HomeAboutArea from './components/About/HomeAbout'

export default function HomePage() {
  return (
    <div>
      <Banner />
      <HomeAboutArea/>
      <SectionDepartment />
      <SectionTeam />
      <SectionAvailable />
      <OurPlan />
      <TrustUs />
      <News />
    </div>
  );
}
