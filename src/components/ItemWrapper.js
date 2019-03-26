import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import items from './../statics/items/items.json';
import ItemBlock from './ItemBlock.js';
import { renderItemType } from './../Util'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit / 2,
  },
  formControl: {
    margin: theme.spacing.unit / 2,
    minWidth: 80,
  },
});

function selectItemsByFilter (filter) {
  return items.filter(item => item.type && item.type === filter)
}
function selectItemsByRarity (itemList, rarity) {
  if (rarity !== 'all') {
    itemList = itemList.filter(item => item.rarity && item.rarity === rarity)
  }
  return itemList;
}
const itemRarities = [
  'all',
  'Common',
  'Uncommon',
  'Rare',
  'Very Rare',
  'Artifact',
  'Legendary',
]
const ItemWrapper = (props) => {
  const { classes } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState('all');
  function selectItems (filter) {
    let itemsFiltered = selectItemsByRarity(selectItemsByFilter(filter), selectedRarity)
    setSelectedItem(itemsFiltered[~~(Math.random() * itemsFiltered.length)])
  }
  function renderItemTypeBlock (type) {
    return `${renderItemType(type)} (${selectItemsByRarity(selectItemsByFilter(type), selectedRarity).length})`
  }
  const handleRarityChange = event => {
    setSelectedRarity(event.target.value);
  }
  console.log('itemwrapper');
  return (
    <>
      <div className={classes.root}>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('$')}>{renderItemTypeBlock('$')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('LA')}>{renderItemTypeBlock('LA')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('MA')}>{renderItemTypeBlock('MA')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('HA')}>{renderItemTypeBlock('HA')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('R')}>{renderItemTypeBlock('R')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('A')}>{renderItemTypeBlock('A')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('M')}>{renderItemTypeBlock('M')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('P')}>{renderItemTypeBlock('P')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('S')}>{renderItemTypeBlock('S')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('W')}>{renderItemTypeBlock('W')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('G')}>{renderItemTypeBlock('G')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('RD')}>{renderItemTypeBlock('RD')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('RG')}>{renderItemTypeBlock('RG')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('SC')}>{renderItemTypeBlock('SC')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('ST')}>{renderItemTypeBlock('ST')}</Button>
        <Button size='small' variant='contained' className={classes.button} onClick={() => selectItems('WD')}>{renderItemTypeBlock('WD')}</Button>
      </div>
      <div className={classes.root}>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="itemRarity">Rarity</InputLabel>
          <Select value={selectedRarity} inputProps={{ name: 'itemRarity', id: 'itemRarity' }} onChange={handleRarityChange}>
            {itemRarities.map((type, i) => <MenuItem key={`rarityOption_${i}`} value={`${type}`}>{type}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      <ItemBlock itemString={selectedItem} />
    </>
  )
}

export default withStyles(styles)(ItemWrapper);