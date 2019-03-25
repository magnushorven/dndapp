import React from 'react';
import './Block.css';
import { LSButtons } from './LSButtons';

function WeirdMagicItemBlock ({ weirdMagicItemString }) {
  return (
    <div className="bloc">
      <div className="monstre">
        {weirdMagicItemString && weirdMagicItemString}
      </div>
      <LSButtons localStorageString={'weirdmagicitem'} string={weirdMagicItemString} />
    </div>
  );
}

export default WeirdMagicItemBlock;