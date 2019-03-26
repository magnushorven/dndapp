import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { saveLs, resetLs, getLs } from './../Util';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

const LSButtons = (props) => {
  const { localStorageString, string, classes } = props;
  return (
    <>
      <Button variant='contained' size='small' className={classes.button} onClick={() => saveLs(`${localStorageString}`, string)}>save</Button>
      <Button variant='contained' size='small' className={classes.button} onClick={() => resetLs(`${localStorageString}`)}>reset</Button>
      <Button variant='contained' size='small' className={classes.button} onClick={() => console.log(getLs(`${localStorageString}`))}>log all</Button>
    </>
  )
}

export default withStyles(styles)(LSButtons);