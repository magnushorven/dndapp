import React, { useState } from 'react';
import cr4_setback_room_trap from './../statics/trap/cr4_setback_room_trap.json';
import TrapBlock from './TrapBlock.js';

function TrapWrapper () {
  const [selectedTrap] = useState(cr4_setback_room_trap);
  const [randomTrap, setRandomTrap] = useState(0);
  function somefunction () {
    setRandomTrap(~~(Math.random() * selectedTrap.length));
  }
  if (!selectedTrap) { return null; }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => { somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>cr4 setback room trap</button>
      </div>
      <TrapBlock trapString={selectedTrap[randomTrap]} />
    </>
  )
}

export default TrapWrapper;