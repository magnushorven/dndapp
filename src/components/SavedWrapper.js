import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import ItemBlock from './ItemBlock.js';
import LootBlock from './LootBlock.js';
import MagicShopBlock from './MagicShopBlock.js';
import MonsterBlock from './MonsterBlock.js';
import NpcBlock from './NpcBlock.js';
import SymbolBlock from './SymbolBlock.js';
import TrapBlock from './TrapBlock.js';
import WeirdMagicItemBlock from './WeirdMagicItemBlock.js';
import { getLs } from './../Util'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})


const SavedWrapper = (props) => {
  const [item] = useState(getLs('item') || []);
  const [loot] = useState(getLs('loot') || []);
  const [shop] = useState(getLs('shop') || []);
  const [monster] = useState(getLs('monster') || []);
  const [npc] = useState(getLs('npc') || []);
  const [symbol] = useState(getLs('symbol') || []);
  const [trap] = useState(getLs('trap') || []);
  const [weirdmagicitem] = useState(getLs('weirdmagicitem') || []);
  return (
    <>
      {item.map((item, index) => <ItemBlock key={`item_${index}`} showButtons={false} itemString={item} />)}
      {loot.map((item, index) => <LootBlock key={`loot_${index}`} showButtons={false} lootString={item} />)}
      {shop.map((item, index) => <MagicShopBlock key={`shop_${index}`} showButtons={false} MagicShop={item} />)}
      {monster.map((item, index) => <MonsterBlock key={`monster_${index}`} showButtons={false} monsterString={item} />)}
      {npc.map((item, index) => <NpcBlock key={`npc_${index}`} showButtons={false} npcString={item} />)}
      {symbol.map((item, index) => <SymbolBlock key={`symbol_${index}`} showButtons={false} symbolString={item} />)}
      {trap.map((item, index) => <TrapBlock key={`trap_${index}`} showButtons={false} trapString={item} />)}
      {weirdmagicitem.map((item, index) => <WeirdMagicItemBlock key={`weirdmagicitem_${index}`} showButtons={false} weirdMagicItemString={item} />)}
    </>
  )
}

export default withStyles(styles)(SavedWrapper);