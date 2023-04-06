import React from 'react';
import Department from './components/sectionDepartsHome/SectionDepartment';
import SectionTeam from './components/sectionTeam/SectionTeam';
import OurPlan from './components/OurPlan/OurPlan';
import TrustUs from './components/TrustUs/TrustUs';
import New from './components/News/New';
export default function HomePage() {
  return (
    <div>
      <Department />
      <SectionTeam />
      <OurPlan />
      <TrustUs />
      <New />
    </div>
  );
}
