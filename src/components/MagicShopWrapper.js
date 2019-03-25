import React, { useState } from 'react';
import magic_shop_alchemist_description from './../statics/magic_shop_description/magic_shop_alchemist_description.json';
import magic_shop_armorer_description from './../statics/magic_shop_description/magic_shop_armorer_description.json';
import magic_shop_scribe_description from './../statics/magic_shop_description/magic_shop_scribe_description.json';
import magic_shop_trader_description from './../statics/magic_shop_description/magic_shop_trader_description.json';
import magic_shop_wandwright_description from './../statics/magic_shop_description/magic_shop_wandwright_description.json';
import magic_shop_weaponsmith_description from './../statics/magic_shop_description/magic_shop_weaponsmith_description.json';
import magic_shop_alchemist_item from './../statics/magic_shop_item/magic_shop_alchemist_item.json';
import magic_shop_armorer_item from './../statics/magic_shop_item/magic_shop_armorer_item.json';
import magic_shop_scribe_item from './../statics/magic_shop_item/magic_shop_scribe_item.json';
import magic_shop_trader_item from './../statics/magic_shop_item/magic_shop_trader_item.json';
import magic_shop_wandwright_item from './../statics/magic_shop_item/magic_shop_wandwright_item.json';
import magic_shop_weaponsmith_item from './../statics/magic_shop_item/magic_shop_weaponsmith_item.json';
import magic_shop_alchemist_name from './../statics/magic_shop_name/magic_shop_alchemist_name.json';
import magic_shop_armorer_name from './../statics/magic_shop_name/magic_shop_armorer_name.json';
import magic_shop_scribe_name from './../statics/magic_shop_name/magic_shop_scribe_name.json';
import magic_shop_trader_name from './../statics/magic_shop_name/magic_shop_trader_name.json';
import magic_shop_wandwright_name from './../statics/magic_shop_name/magic_shop_wandwright_name.json';
import magic_shop_weaponsmith_name from './../statics/magic_shop_name/magic_shop_weaponsmith_name.json';
import magic_shop_location from './../statics/magic_shop_location/magic_shop_location.json';
import MagicShopBlock from './MagicShopBlock.js';
import { formatMagicShop, getRandomSubarray } from './../Util';

function PopulateMagicShops () {
  return {
    'alchemist': { description: magic_shop_alchemist_description, item: magic_shop_alchemist_item, name: magic_shop_alchemist_name },
    'armorer': { description: magic_shop_armorer_description, item: magic_shop_armorer_item, name: magic_shop_armorer_name },
    'scribe': { description: magic_shop_scribe_description, item: magic_shop_scribe_item, name: magic_shop_scribe_name },
    'trader': { description: magic_shop_trader_description, item: magic_shop_trader_item, name: magic_shop_trader_name },
    'wandwright': { description: magic_shop_wandwright_description, item: magic_shop_wandwright_item, name: magic_shop_wandwright_name },
    'weaponsmith': { description: magic_shop_weaponsmith_description, item: magic_shop_weaponsmith_item, name: magic_shop_weaponsmith_name }
  };
}

function MagicShopWrapper () {
  const [magicShops] = useState(PopulateMagicShops());
  const [selectedMagicShopType, setSelectedMagicShopType] = useState(magicShops.alchemist);
  const [selectedMagicShopDescription, setSelectedMagicShopDescription] = useState(someFunctionRandomSingle(selectedMagicShopType.description));
  const [selectedMagicShopItems, setSelectedMagicShopItems] = useState(getRandomSubarray(selectedMagicShopType.item, 5));
  const [selectedMagicShopName, setSelectedMagicShopName] = useState(someFunctionRandomSingle(selectedMagicShopType.name));
  const [selectedMagicShopLocation, setSelectedMagicShopLocation] = useState(someFunctionRandomSingle(magic_shop_location));

  function somefunction (prop = null) {
    console.log('somefunc', prop, selectedMagicShopType.item[0])
    if (prop !== null) {
      switch (prop) {
        case 'description':
          setSelectedMagicShopDescription(someFunctionRandomSingle(selectedMagicShopType.description))
          break;
        case 'items':
          setSelectedMagicShopItems(getRandomSubarray(selectedMagicShopType.item, 5))
          break;
        case 'name':
          setSelectedMagicShopName(someFunctionRandomSingle(selectedMagicShopType.name))
          break;
        case 'location':
          setSelectedMagicShopLocation(someFunctionRandomSingle(magic_shop_location))
          break;
      }
    } else {
      setSelectedMagicShopDescription(someFunctionRandomSingle(selectedMagicShopType.description))
      setSelectedMagicShopItems(getRandomSubarray(selectedMagicShopType.item, 5))
      setSelectedMagicShopName(someFunctionRandomSingle(selectedMagicShopType.name))
      setSelectedMagicShopLocation(someFunctionRandomSingle(magic_shop_location))
    }
  }
  function someFunctionRandomSingle (items) {
    return items[~~(Math.random() * items.length)];
  }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => { setSelectedMagicShopType(magicShops.alchemist); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Alchemist</button>
        <button onClick={() => { setSelectedMagicShopType(magicShops.armorer); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Armorer</button>
        <button onClick={() => { setSelectedMagicShopType(magicShops.scribe); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Scribe</button>
        <button onClick={() => { setSelectedMagicShopType(magicShops.trader); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Trader</button>
        <button onClick={() => { setSelectedMagicShopType(magicShops.wandwright); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Wandwright</button>
        <button onClick={() => { setSelectedMagicShopType(magicShops.weaponsmith); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Weaponsmith</button>
      </div>
      <MagicShopBlock
        MagicShop={formatMagicShop(selectedMagicShopDescription, selectedMagicShopLocation, selectedMagicShopName, selectedMagicShopItems)}
        FetchNew={somefunction}
      />
    </>
  )
}

export default MagicShopWrapper;