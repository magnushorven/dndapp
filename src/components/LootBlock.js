import React, { useState } from 'react';
import './Block.css';
import { LSButtons } from './LSButtons';


function ParseLoot (lootString) {
  let lootArray = lootString.split(/,(?![^(]*\))/)
  console.log(lootArray)
  return lootArray;
}

function LootBlock ({ lootString }) {
  const [loot, setLoot] = useState(ParseLoot(lootString || ''));

  if (!loot || loot == '') { return null; }
  return (
    <div className="bloc">
      <div className="monstre">
        {loot.map((l, i) => <p key={`loot${i}`}>{l}</p>)}
      </div>
      <LSButtons localStorageString={'loot'} string={lootString} />
    </div>
  );
}

export default LootBlock;