import React, { useState } from 'react';
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
function NpcWrapper () {
  const [npcs] = useState(PopulateNpcs());
  const [selectedNpcs, setSelectedNpcs] = useState(npcs.npc_dragonborn_female);
  const [randomNpc, setRandomNpc] = useState(0);
  if (!selectedNpcs) { return null; }
  function somefunction () {
    setRandomNpc(~~(Math.random() * selectedNpcs.length));
  }
  return (
    <>
      <div style={{ width: '100%', backgroundColor: 'black', display: 'flex' }}>
        <button onClick={() => { setSelectedNpcs(npcs.npc_dragonborn_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Dragonborn Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_dragonborn_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Dragonborn Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_dwarf_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Dwarf Famle</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_dwarf_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Dwarf Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_elf_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Elf Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_elf_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Elf Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_gnome_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Gnome Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_gnome_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Gnome Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_half_elf_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Half Elf Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_half_elf_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Half Elf Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_half_orc_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Half Orc Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_half_orc_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Half Orc Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_human_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Human Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_human_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Human Male</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_tiefling_female); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Tiefling Female</button>
        <button onClick={() => { setSelectedNpcs(npcs.npc_tiefling_male); somefunction(); }} style={{ backgroundColor: '#c5c5c5', margin: '10px', padding: '5px' }}>Tiefling Male</button>
      </div>
      <NpcBlock key={`npc${randomNpc}`} npcString={selectedNpcs[randomNpc]} />
    </>
  )
}

export default NpcWrapper;