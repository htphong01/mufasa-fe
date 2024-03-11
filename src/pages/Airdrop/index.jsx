import React from 'react';
import Tutorial from './Tutorial';
import Progress from './Progress';
import Introduction from './Introduction';

export default function AirdropPage() {
  return (
    <div>
      <Progress />
      <Introduction />
      <Tutorial />
    </div>
  );
}
