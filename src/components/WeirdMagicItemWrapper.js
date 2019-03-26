import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import weird_magic_item from './../statics/weird_magic_item/weird_magic_item.json';
import WeirdMagicItemBlock from './WeirdMagicItemBlock.js';
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
})

const WeirdMagicItemWrapper = (props) => {
  const { classes } = props;
  const [selectedWeirdMagicItem] = useState(weird_magic_item);
  const [randomWeirdMagicItem, setRandomWeirdMagicItem] = useState(0);
  function somefunction () {
    setRandomWeirdMagicItem(~~(Math.random() * selectedWeirdMagicItem.length));
  }
  if (!selectedWeirdMagicItem) { return null; }
  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} onClick={() => { somefunction(); }}>Weird magic item</Button>
      </div>
      <WeirdMagicItemBlock weirdMagicItemString={selectedWeirdMagicItem[randomWeirdMagicItem]} />
    </>
  )
}

export default withStyles(styles)(WeirdMagicItemWrapper);