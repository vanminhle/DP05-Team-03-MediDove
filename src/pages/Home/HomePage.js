import React from 'react';
import Department from './components/sectionDepartsHome/SectionDepartment';
import SectionTeam from './components/sectionTeam/SectionTeam';
import OurPlan from './components/OurPlan/OurPlan';
import TrustUs from './components/TrustUs/TrustUs';
import New from './components/News/New';
import SectionAvailable from './components/sectionAvailable247/SectionAvailable';

export default function HomePage() {
  return (
    <div>
      <Department />
      <SectionTeam />
      <SectionAvailable/>
      <OurPlan />
      <TrustUs />
      <New />
    </div>
  );
}
