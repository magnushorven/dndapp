import React from 'react';
import './Block.css';
import LSButtons from './LSButtons';

function TrapBlock ({ trapString, showButtons = true }) {
  return (
    <div className="bloc">
      <div className="monstre">
        {trapString && trapString}
      </div>
      {showButtons && <LSButtons localStorageString={'trap'} string={trapString} />}
    </div>
  );
}

export default TrapBlock;