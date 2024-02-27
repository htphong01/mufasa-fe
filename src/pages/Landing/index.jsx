import React from 'react';
import Banner from './Banner';
import Introduction from './Introduction';
import Feature from './Feature';
import Tokenomic from './Tokenomic';
import Phase from './Phase';

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <Introduction />
      <Feature />
      <Tokenomic />
      <Phase />
    </div>
  );
}
