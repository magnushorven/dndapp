import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import cr5_individual_loot from './../statics/loot/cr5_individual_loot.json';
import cr5_treasure_hoard from './../statics/loot/cr5_treasure_hoard.json';
import cr6_individual_loot from './../statics/loot/cr6_individual_loot.json';
import LootBlock from './LootBlock.js';
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
const LootWrapper = (props) => {
  const { classes } = props;
  const [selectedLoot, setSelectedLoot] = useState(cr5_individual_loot);
  const [randomLoot, setRandomLoot] = useState(0);
  function somefunction () {
    setRandomLoot(~~(Math.random() * selectedLoot.length));
  }
  if (!selectedLoot) { return null; }
  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} onClick={() => { setSelectedLoot(cr5_individual_loot); somefunction(); }}>cr5 individual loot</Button>
        <Button variant="contained" className={classes.button} onClick={() => { setSelectedLoot(cr5_treasure_hoard); somefunction(); }}>cr5_treasure_hoard</Button>
        <Button variant="contained" className={classes.button} onClick={() => { setSelectedLoot(cr6_individual_loot); somefunction(); }}>cr6 individual loot</Button>
      </div>
      <LootBlock key={`loot${randomLoot}`} lootString={selectedLoot[randomLoot]} />
    </>
  )
}

export default withStyles(styles)(LootWrapper);