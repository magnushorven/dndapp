import React, { useState } from 'react';
import './../App.css';
import NpcWrapper from './NpcWrapper.js';
import LootWrapper from './LootWrapper.js';
import ItemWrapper from './ItemWrapper.js';
import MagicShopWrapper from './MagicShopWrapper.js';
import TrapWrapper from './TrapWrapper.js';
import SymbolWrapper from './SymbolWrapper.js';
import WeirdMagicItemWrapper from './WeirdMagicItemWrapper.js';

function Menu () {
  const [selectedMenu, setSelectedMenu] = useState(null);
  let wrapper;
  switch (selectedMenu) {
    case 'loot':
      wrapper = <LootWrapper />
      break;
    case 'items':
      wrapper = <ItemWrapper />
      break;
    case 'magic_shops':
      wrapper = <MagicShopWrapper />
      break;
    case 'traps':
      wrapper = <TrapWrapper />
      break;
    case 'symbols':
      wrapper = <SymbolWrapper />
      break;
    case 'weird_magic_items':
      wrapper = <WeirdMagicItemWrapper />
      break;
    default:
      wrapper = <NpcWrapper />
      break;
  }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => setSelectedMenu('loot')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Loot</button>
        <button onClick={() => setSelectedMenu('items')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Items</button>
        <button onClick={() => setSelectedMenu('magic_shops')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Magic Shops</button>
        <button onClick={() => setSelectedMenu('npcs')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Npc</button>
        <button onClick={() => setSelectedMenu('symbols')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Symbols</button>
        <button onClick={() => setSelectedMenu('traps')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Trap</button>
        <button onClick={() => setSelectedMenu('weird_magic_items')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Weird magic items</button>
      </div>
      {wrapper}
    </>
  );
}

export default Menu;
