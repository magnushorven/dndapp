import React from 'react';
import { Button } from './Button';
import { saveLs, resetLs, getLs } from './../Util';

export const LSButtons = ({ localStorageString, string }) => (
  <>
    <Button text='save' onClick={() => saveLs(`${localStorageString}`, string)} />
    <Button text='reset' onClick={() => resetLs(`${localStorageString}`)} />
    <Button text='get' onClick={() => console.log(getLs(`${localStorageString}`))} />
  </>
)