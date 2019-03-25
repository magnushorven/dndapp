import React, { useState } from 'react';
import cr5_individual_loot from './../statics/loot/cr5_individual_loot.json';
import cr5_treasure_hoard from './../statics/loot/cr5_treasure_hoard.json';
import cr6_individual_loot from './../statics/loot/cr6_individual_loot.json';
import LootBlock from './LootBlock.js';

function LootWrapper () {
  const [selectedLoot, setSelectedLoot] = useState(cr5_individual_loot);
  const [randomLoot, setRandomLoot] = useState(0);
  function somefunction () {
    setRandomLoot(~~(Math.random() * selectedLoot.length));
  }
  if (!selectedLoot) { return null; }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => { setSelectedLoot(cr5_individual_loot); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>cr5 individual loot</button>
        <button onClick={() => { setSelectedLoot(cr5_treasure_hoard); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>cr5_treasure_hoard</button>
        <button onClick={() => { setSelectedLoot(cr6_individual_loot); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>cr6 individual loot</button>
      </div>
      <LootBlock key={`loot${randomLoot}`} lootString={selectedLoot[randomLoot]} />
    </>
  )
}

export default LootWrapper;