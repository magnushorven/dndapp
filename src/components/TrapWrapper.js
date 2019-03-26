import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import cr4_setback_room_trap from './../statics/trap/cr4_setback_room_trap.json';
import TrapBlock from './TrapBlock.js';
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

const TrapWrapper = (props) => {
  const { classes } = props;
  const [selectedTrap] = useState(cr4_setback_room_trap);
  const [randomTrap, setRandomTrap] = useState(0);
  function somefunction () {
    setRandomTrap(~~(Math.random() * selectedTrap.length));
  }
  if (!selectedTrap) { return null; }
  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} onClick={() => { somefunction(); }}>cr4 setback room trap</Button>
      </div>
      <TrapBlock trapString={selectedTrap[randomTrap]} />
    </>
  )
}

export default withStyles(styles)(TrapWrapper);