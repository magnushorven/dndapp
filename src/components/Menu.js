import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './../App.css';
import NpcWrapper from './NpcWrapper.js';
import LootWrapper from './LootWrapper.js';
import ItemWrapper from './ItemWrapper.js';
import MagicShopWrapper from './MagicShopWrapper.js';
import TrapWrapper from './TrapWrapper.js';
import SymbolWrapper from './SymbolWrapper.js';
import WeirdMagicItemWrapper from './WeirdMagicItemWrapper.js';
import MonsterWrapper from './MonsterWrapper.js';
import SavedWrapper from './SavedWrapper.js';
import Button from '@material-ui/core/Button';

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
});

const Menu = (props) => {
  const { classes } = props;
  const [selectedMenu, setSelectedMenu] = useState('monsters');
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
    case 'monsters':
      wrapper = <MonsterWrapper />
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
    case 'saved':
      wrapper = <SavedWrapper />
      break;
    default:
      wrapper = <NpcWrapper />
      break;
  }
  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'loot' ? 'primary' : 'default'} onClick={() => setSelectedMenu('loot')}>Loot</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'items' ? 'primary' : 'default'} onClick={() => setSelectedMenu('items')}>Items</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'magic_shops' ? 'primary' : 'default'} onClick={() => setSelectedMenu('magic_shops')}>Magic Shops</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'monsters' ? 'primary' : 'default'} onClick={() => setSelectedMenu('monsters')}>Monsters</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'npcs' ? 'primary' : 'default'} onClick={() => setSelectedMenu('npcs')}>Npc</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'symbols' ? 'primary' : 'default'} onClick={() => setSelectedMenu('symbols')}>Symbols</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'traps' ? 'primary' : 'default'} onClick={() => setSelectedMenu('traps')}>Trap</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'weird_magic_items' ? 'primary' : 'default'} onClick={() => setSelectedMenu('weird_magic_items')}>Weird magic items</Button>
        <Button variant="contained" className={classes.button} color={selectedMenu === 'saved' ? 'primary' : 'default'} onClick={() => setSelectedMenu('saved')}>Saved</Button>
      </div>
      {wrapper}
    </>
  );
}

export default withStyles(styles)(Menu);
