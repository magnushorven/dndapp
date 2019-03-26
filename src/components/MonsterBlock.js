import React from 'react';
import './Block.css';
import LSButtons from './LSButtons';
import { ParseAbilityScoreAndModifier } from './../Util';

const simpleProperties = [
  //  'name',
  'size',
  'type',
  'alignment',
  'ac',
  'hp',
  'cr',
  'speed',
  //  'str',
  //  'dex',
  //  'con',
  //  'int',
  //  'wis',
  //  'cha',
  'description',
  'save',
  'skill',
  'resist',
  'vulnerable',
  'immune',
  'conditionImmune',
  'senses',
  'passive',
  'languages',
  'spells',
  'slots',
  'skill',
]
const complexProperties = [
  'trait',
  'action',
  'legendary',
  'reaction',
]

function parseComplex (complex, index) {
  return Array.isArray(complex) ? complex.map((complexObject, i) => parseComplexObject(complexObject, `_i_${index}_${i}_`)) : parseComplexObject(complex, `_index_${index}_`)
}
function parseComplexObject (complexObject, index) {
  return (
    <>
      {complexObject.name && <div key={`coname_${index}`}>name:<div key={`coname_name_${index}`}> {complexObject.name}</div></div>}
      {complexObject.text && <div key={`cotext_${index}`}>text:{parseComplexProperty(complexObject.text, `complextext_${index}_`)}</div>}
      {complexObject.attack && <div key={`coattack_${index}`}>attack:{parseComplexProperty(complexObject.attack, `complexattack_${index}_`)}</div>}
    </>
  )
}
function parseComplexProperty (complexProperty, index) {
  return Array.isArray(complexProperty) ? complexProperty.map((t, i) => <div key={`complexTextProp_${index}_${i}`}>{t}</div>) : <div key={`complexTextProp_${index}`}>{complexProperty}</div>
}
function MonsterBlock ({ monsterString, showButtons = true }) {
  if (!monsterString || monsterString === '') { return null; }
  return (
    <div className="bloc">
      <div className={`monstre`}>
        {monsterString.name && <h1>{monsterString.name}</h1>}
        <div>
          <div className="carac">
            <strong>STR</strong><br />
            {ParseAbilityScoreAndModifier(monsterString.str)}
          </div>
          <div className="carac">
            <strong>DEX</strong><br />
            {ParseAbilityScoreAndModifier(monsterString.dex)}
          </div>
          <div className="carac">
            <strong>CON</strong><br />
            {ParseAbilityScoreAndModifier(monsterString.con)}
          </div>
          <div className="carac">
            <strong>INT</strong><br />
            {ParseAbilityScoreAndModifier(monsterString.int)}
          </div>
          <div className="carac">
            <strong>WIS</strong><br />
            {ParseAbilityScoreAndModifier(monsterString.wis)}
          </div>
          <div className="carac">
            <strong>CHA</strong><br />
            {ParseAbilityScoreAndModifier(monsterString.cha)}
          </div>
        </div>
        {simpleProperties.map((pro, index) => monsterString[`${pro}`] && <div key={`monsterProp_${index}`}>{pro} : {monsterString[`${pro}`]}</div>)}
        {complexProperties.map((pro, index) => monsterString[`${pro}`] && <div key={`monsterComplexProp_${index}`}>{pro} : {parseComplex(monsterString[`${pro}`], `mo_${index}_c_`)}</div>)}
      </div>
      {showButtons && <LSButtons localStorageString={'monster'} string={monsterString} />}
    </div>
  );
}

export default MonsterBlock;