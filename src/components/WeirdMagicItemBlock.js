import React from 'react';
import './Block.css';
import LSButtons from './LSButtons';

function WeirdMagicItemBlock ({ weirdMagicItemString, showButtons = true }) {
  return (
    <div className="bloc">
      <div className="monstre">
        {weirdMagicItemString && weirdMagicItemString}
      </div>
      {showButtons && <LSButtons localStorageString={'weirdmagicitem'} string={weirdMagicItemString} />}
    </div>
  );
}

export default WeirdMagicItemBlock;