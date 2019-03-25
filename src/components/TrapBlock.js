import React from 'react';
import './Block.css';
import { LSButtons } from './LSButtons';

function TrapBlock ({ trapString }) {
  return (
    <div className="bloc">
      <div className="monstre">
        {trapString && trapString}
      </div>
      <LSButtons localStorageString={'trap'} string={trapString} />
    </div>
  );
}

export default TrapBlock;