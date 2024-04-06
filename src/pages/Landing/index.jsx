import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Introduction from './Introduction';
import Phase from './Phase';
import ScrollingText from './ScrollingText';
import Tokenomic from './Tokenomic';

export default function LandingPage() {
  return (
    <div>
      <Banner />
      {/* <ScrollingText /> */}
      <Introduction />
      <Feature />
      <Tokenomic />
      <Phase />
    </div>
  );
}
