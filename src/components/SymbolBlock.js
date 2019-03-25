import React from 'react';
import './Block.css';
import { LSButtons } from './LSButtons';


function SymbolBlock ({ symbolString }) {
  return (
    <div className="bloc">
      <div className="monstre">
        {symbolString && symbolString}
      </div>
      <LSButtons localStorageString={'symbol'} string={symbolString} />
    </div>
  );
}

export default SymbolBlock;