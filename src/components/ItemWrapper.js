import React, { useState } from 'react';
import items from './../statics/items/items.json';
import ItemBlock from './ItemBlock.js';
import { renderItemType } from './../Util'

function selectItemsByFilter (filter) {
  return items.filter(item => item.type && item.type === filter)
}
function selectItemsByRarity (itemList, rarity) {
  if (rarity !== null) {
    itemList = itemList.filter(item => item.rarity && item.rarity === rarity)
  }
  return itemList;
}
function ItemWrapper () {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState(null);
  function selectItems (filter) {
    let itemsFiltered = selectItemsByRarity(selectItemsByFilter(filter), selectedRarity)
    setSelectedItem(itemsFiltered[~~(Math.random() * itemsFiltered.length)])
  }
  function renderItemTypeBlock (type) {
    return `${renderItemType(type)} (${selectItemsByRarity(selectItemsByFilter(type), selectedRarity).length})`
  }
  console.log('itemwrapper');
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => selectItems('$')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('$')}</button>
        <button onClick={() => selectItems('LA')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('LA')}</button>
        <button onClick={() => selectItems('MA')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('MA')}</button>
        <button onClick={() => selectItems('HA')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('HA')}</button>
        <button onClick={() => selectItems('R')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('R')}</button>
        <button onClick={() => selectItems('A')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('A')}</button>
        <button onClick={() => selectItems('M')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('M')}</button>
        <button onClick={() => selectItems('P')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('P')}</button>
        <button onClick={() => selectItems('S')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('S')}</button>
        <button onClick={() => selectItems('W')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('W')}</button>
        <button onClick={() => selectItems('G')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('G')}</button>
        <button onClick={() => selectItems('RD')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('RD')}</button>
        <button onClick={() => selectItems('RG')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('RG')}</button>
        <button onClick={() => selectItems('SC')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('SC')}</button>
        <button onClick={() => selectItems('ST')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('ST')}</button>
        <button onClick={() => selectItems('WD')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>{renderItemTypeBlock('WD')}</button>
      </div>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => setSelectedRarity(null)} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>All</button>
        <button onClick={() => setSelectedRarity('Common')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>Common</button>
        <button onClick={() => setSelectedRarity('Uncommon')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>Uncommon</button>
        <button onClick={() => setSelectedRarity('Rare')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>Rare</button>
        <button onClick={() => setSelectedRarity('Very Rare')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>Very Rare</button>
        <button onClick={() => setSelectedRarity('Artifact')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>Artifact</button>
        <button onClick={() => setSelectedRarity('Legendary')} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px 0px' }}>Legendary</button>
      </div>
      <ItemBlock itemString={selectedItem} />
    </>
  )
}

export default ItemWrapper;
