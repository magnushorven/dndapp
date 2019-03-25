import React, { useState } from 'react';
import weird_magic_item from './../statics/weird_magic_item/weird_magic_item.json';
import WeirdMagicItemBlock from './WeirdMagicItemBlock.js';

function WeirdMagicItemWrapper () {
  const [selectedWeirdMagicItem] = useState(weird_magic_item);
  const [randomWeirdMagicItem, setRandomWeirdMagicItem] = useState(0);
  function somefunction () {
    setRandomWeirdMagicItem(~~(Math.random() * selectedWeirdMagicItem.length));
  }
  if (!selectedWeirdMagicItem) { return null; }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => { somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Weird magic item</button>
      </div>
      <WeirdMagicItemBlock weirdMagicItemString={selectedWeirdMagicItem[randomWeirdMagicItem]} />
    </>
  )
}

export default WeirdMagicItemWrapper;