import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import npc_dragonborn_female from './../statics/npc/npc_dragonborn_female.json';
import npc_dragonborn_male from './../statics/npc/npc_dragonborn_male.json';
import npc_dwarf_female from './../statics/npc/npc_dwarf_female.json';
import npc_dwarf_male from './../statics/npc/npc_dwarf_male.json';
import npc_elf_female from './../statics/npc/npc_elf_female.json';
import npc_elf_male from './../statics/npc/npc_elf_male.json';
import npc_gnome_female from './../statics/npc/npc_gnome_female.json';
import npc_gnome_male from './../statics/npc/npc_gnome_male.json';
import npc_half_elf_female from './../statics/npc/npc_half_elf_female.json';
import npc_half_elf_male from './../statics/npc/npc_half_elf_male.json';
import npc_half_orc_female from './../statics/npc/npc_half_orc_female.json';
import npc_half_orc_male from './../statics/npc/npc_half_orc_male.json';
import npc_human_female from './../statics/npc/npc_human_female.json';
import npc_human_male from './../statics/npc/npc_human_male.json';
import npc_tiefling_female from './../statics/npc/npc_tiefling_female.json';
import npc_tiefling_male from './../statics/npc/npc_tiefling_male.json';
import NpcBlock from './NpcBlock.js';
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


function PopulateNpcs () {
  return {
    'npc_dragonborn_female': npc_dragonborn_female,
    'npc_dragonborn_male': npc_dragonborn_male,
    'npc_dwarf_female': npc_dwarf_female,
    'npc_dwarf_male': npc_dwarf_male,
    'npc_elf_female': npc_elf_female,
    'npc_elf_male': npc_elf_male,
    'npc_gnome_female': npc_gnome_female,
    'npc_gnome_male': npc_gnome_male,
    'npc_half_elf_female': npc_half_elf_female,
    'npc_half_elf_male': npc_half_elf_male,
    'npc_half_orc_female': npc_half_orc_female,
    'npc_half_orc_male': npc_half_orc_male,
    'npc_human_female': npc_human_female,
    'npc_human_male': npc_human_male,
    'npc_tiefling_female': npc_tiefling_female,
    'npc_tiefling_male': npc_tiefling_male
  };
}
const NpcWrapper = (props) => {
  const { classes } = props;
  const [npcs] = useState(PopulateNpcs());
  const [selectedNpcType, setSelectedNpcType] = useState('npc_dragonborn_female');
  const [selectedNpc, setSelectedNpc] = useState(null);
  useEffect(somefunction, [selectedNpcType])
  function somefunction () {
    const npcFiltered = npcs[`${selectedNpcType}`]
    setSelectedNpc(npcFiltered[~~(Math.random() * npcFiltered.length)])
  }

  return (
    <>
      <div className={classes.root}>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_dragonborn_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_dragonborn_female')}>Dragonborn Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_dragonborn_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_dragonborn_male')}>Dragonborn Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_dwarf_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_dwarf_female')}>Dwarf Famle</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_dwarf_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_dwarf_male')}>Dwarf Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_elf_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_elf_female')}>Elf Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_elf_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_elf_male')}>Elf Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_gnome_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_gnome_female')}>Gnome Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_gnome_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_gnome_male')}>Gnome Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_half_elf_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_half_elf_female')}>Half Elf Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_half_elf_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_half_elf_male')}>Half Elf Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_half_orc_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_half_orc_female')}>Half Orc Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_half_orc_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_half_orc_male')}>Half Orc Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_human_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_human_female')}>Human Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_human_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_human_male')}>Human Male</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_tiefling_female' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_tiefling_female')}>Tiefling Female</Button>
        <Button size="small" variant="contained" className={classes.button} color={selectedNpcType === 'npc_tiefling_male' ? 'primary' : 'default'} onClick={() => setSelectedNpcType('npc_tiefling_male')}>Tiefling Male</Button>
      </div>
      <NpcBlock key={~~(Math.random() * 10000)} npcString={selectedNpc} />
    </>
  )
}

export default withStyles(styles)(NpcWrapper);