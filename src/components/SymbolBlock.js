import React from 'react';
import './Block.css';
import LSButtons from './LSButtons';


function SymbolBlock ({ symbolString, showButtons = true }) {
  return (
    <div className="bloc">
      <div className="monstre">
        {symbolString && symbolString}
      </div>
      {showButtons && <LSButtons localStorageString={'symbol'} string={symbolString} />}
    </div>
  );
}

export default SymbolBlock;