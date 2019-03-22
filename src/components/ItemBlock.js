import React from 'react';
import './Block.css';
import { LSButtons } from './LSButtons';
import { renderItemType } from './../Util'
function renderLine () {
  return (
    <div>
      <svg><polyline points="0,0 700,2.5 0,5" style={{ fill: "#922610", stroke: "#922610" }}></polyline></svg>
    </div>
  )
}

function ItemBlock ({ itemString }) {
  if (!itemString || itemString == '') { return null; }

  return (
    <div className="bloc">
      <div className={`monstre monstre_${itemString.rarity ? itemString.rarity : 'none'}`}>
        {itemString.name ? <h1>{itemString.name}</h1> : null}
        {itemString.type ? <div className="sansSerif">type: {renderItemType(itemString.type)}</div> : null}
        {itemString.magic ? <div className="sansSerif">magic: {itemString.magic}</div> : null}
        {itemString.value ? <div className="sansSerif">value: {itemString.value}</div> : null}
        {itemString.weight ? <div className="sansSerif">weight: {itemString.weight}</div> : null}
        {itemString.ac ? <div className="sansSerif">ac: {itemString.ac}</div> : null}
        {itemString.strength ? <div className="sansSerif">strength: {itemString.strength}</div> : null}
        {itemString.stealth ? <div className="sansSerif">stealth: {itemString.stealth}</div> : null}
        {itemString.rarity ? <div className="sansSerif">rarity: {itemString.rarity}</div> : null}
        {itemString.dmg1 ? <div className="sansSerif">dmg1: {itemString.dmg1}</div> : null}
        {itemString.dmg2 ? <div className="sansSerif">dmg2: {itemString.dmg2}</div> : null}
        {itemString.dmgType ? <div className="sansSerif">dmgType: {itemString.dmgType}</div> : null}
        {itemString.property ? <div className="sansSerif">property: {itemString.property}</div> : null}
        {itemString.range ? <div className="sansSerif">range: {itemString.range}</div> : null}
        {itemString.roll ? <div className="sansSerif">roll: {itemString.roll}</div> : null}
        {itemString.detail ? <div className="sansSerif">detail: {itemString.detail}</div> : null}
        {itemString.modifier ? <div className="sansSerif">modifier:</div> : null}
        {itemString.modifier && itemString.modifier[0] ? <div className="sansSerif">{itemString.modifier[0].category ? itemString.modifier[0]._category : null} {itemString.modifier[0].text ? itemString.modifier[0].text : null}</div> : null}
        {itemString.modifier && itemString.modifier[1] ? <div className="sansSerif">{itemString.modifier[1].category ? itemString.modifier[1]._category : null} {itemString.modifier[1].text ? itemString.modifier[1].text : null}</div> : null}
        {itemString.text ? (
          <>
            {renderLine()}
            <div className="sansSerif">{itemString.text.map((t, i) => <p key={i}>{t}</p>)}</div>
            {renderLine()}
          </>) : null}

        {itemString.source ? <div className="sansSerif"><i>{itemString.source}</i></div> : null}
      </div>
      <LSButtons localStorageString={'item'} string={itemString} />
    </div>
  );
}

export default ItemBlock;