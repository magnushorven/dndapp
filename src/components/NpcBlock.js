import React, { useState } from 'react';
import './Block.css';
import LSButtons from './LSButtons';
import { ParseAbilityScoreAndModifier } from './../Util';

function ParseNpc (npcString) {
  var npcArray = /^(\w+\s?\w+?):\s(\w+)\s(\w{0,}-?\w{0,})\s(\w+),\s(\w+).\sStr\s(\d+),\sDex\s(\d+),\sCon\s(\d+),\sInt\s(\d+),\sWis\s(\d+),\sCha\s(\d+).\s?([A-Za-z\s\d,-]+).\s?([A-Za-z\s\d,-]+).\s?($|\s?([A-Za-z\s\d,-]+)?)./.exec(npcString);
  //console.log(npcArray)
  return npcArray;
}
function npcType (str, dex, con, int, wiz, cha) {
  let sum = (parseInt(str) + parseInt(dex) + parseInt(con) + parseInt(int) + parseInt(wiz) + parseInt(cha)) / 6;
  return `monstre_${sum >= 13 ? 'Legendary' : sum >= 11 ? 'Very' : sum >= 9 ? 'Uncommon' : 'Common'}`
}
function NpcBlock ({ npcString, showButtons = true }) {
  const [npc] = useState(ParseNpc(npcString));

  if (!npc) { return null; }
  return (
    <div className="bloc">
      <div className={`monstre ${npcType(npc[6], npc[7], npc[8], npc[9], npc[10], npc[11])}`}>
        <h1>{npc[1]}</h1>
        <div className="sansSerif">
          <h2>
            <em>{npc[2]} {npc[3]} {npc[4]}, {npc[5]}</em>
          </h2>
          <div>
            <svg><polyline points="0,0 700,2.5 0,5" style={{ fill: "#922610", stroke: "#922610" }}></polyline></svg>
          </div>
          <div>
            <div className="carac">
              <strong>STR</strong><br />
              {ParseAbilityScoreAndModifier(npc[6])}
            </div>
            <div className="carac">
              <strong>DEX</strong><br />
              {ParseAbilityScoreAndModifier(npc[7])}
            </div>
            <div className="carac">
              <strong>CON</strong><br />
              {ParseAbilityScoreAndModifier(npc[8])}
            </div>
            <div className="carac">
              <strong>INT</strong><br />
              {ParseAbilityScoreAndModifier(npc[9])}
            </div>
            <div className="carac">
              <strong>WIS</strong><br />
              {ParseAbilityScoreAndModifier(npc[10])}
            </div>
            <div className="carac">
              <strong>CHA</strong><br />
              {ParseAbilityScoreAndModifier(npc[11])}
            </div>
          </div>
          <div>
            <svg><polyline points="0,0 700,2.5 0,5" style={{ fill: "#922610", stroke: "#922610" }}></polyline></svg>
          </div>
          {npc[12] ? (<p>{npc[12]}</p>) : null}
          {npc[13] ? (<p>{npc[13]}</p>) : null}
          {npc[14] ? (<p>{npc[14]}</p>) : null}
        </div>
      </div>
      {showButtons && <LSButtons localStorageString={'npc'} string={npcString} />}
    </div>
  );
}

export default NpcBlock;