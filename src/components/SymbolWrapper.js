import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles'
import cypher from './../statics/symbols/cypher.json';
import trinkets from './../statics/symbols/trinkets.json';
import SymbolBlock from './SymbolBlock.js';
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

const SymbolWrapper = (props) => {
  const { classes } = props
  const [selectedSymbol, setSelectedSymbol] = useState(cypher);
  const [randomSymbol, setRandomSymbol] = useState(0);
  function somefunction () {
    setRandomSymbol(~~(Math.random() * selectedSymbol.length));
  }
  if (!selectedSymbol) { return null; }
  return (
    <>
      <div className={classes.root}>
        <Button variant="contained" className={classes.button} onClick={() => { setSelectedSymbol(cypher); somefunction(); }}>cyphers</Button>
        <Button variant="contained" className={classes.button} onClick={() => { setSelectedSymbol(trinkets); somefunction(); }}>trinkets</Button>
      </div>
      <SymbolBlock symbolString={selectedSymbol[randomSymbol]} />
    </>
  )
}

export default withStyles(styles)(SymbolWrapper);