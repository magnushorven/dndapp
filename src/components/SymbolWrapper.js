import React, { useState } from 'react';
import cypher from './../statics/symbols/cypher.json';
import trinkets from './../statics/symbols/trinkets.json';
import SymbolBlock from './SymbolBlock.js';

function SymbolWrapper () {
  const [selectedSymbol, setSelectedSymbol] = useState(cypher);
  const [randomSymbol, setRandomSymbol] = useState(0);
  function somefunction () {
    setRandomSymbol(~~(Math.random() * selectedSymbol.length));
  }
  if (!selectedSymbol) { return null; }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => { setSelectedSymbol(cypher); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>cyphers</button>
        <button onClick={() => { setSelectedSymbol(trinkets); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>trinkets</button>
      </div>
      <SymbolBlock symbolString={selectedSymbol[randomSymbol]} />
    </>
  )
}

export default SymbolWrapper;