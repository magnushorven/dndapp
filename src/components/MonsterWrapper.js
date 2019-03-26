import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import monsters from './../statics/monsters/monsters.json';
import MonsterBlock from './MonsterBlock.js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

function renderInputComponent (inputProps) {
  const { classes, inputRef = () => { }, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion (suggestion, { query, isHighlighted }) {
  console.log('renderSuggestion', suggestion, query, isHighlighted)
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) =>
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            ),
        )}
      </div>
    </MenuItem>
  );
}

function getSuggestions (value) {
  console.log('getSuggestions', value)
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : monsters.filter(suggestion => {
      const keep = count < 5 && suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}


const monsterTypes = [
  'all',
  'humanoid',
  'undead',
  'fey',
  'beast',
  'fiend',
  'monstrosity',
  'dragon',
  'giant',
  'aberration',
  'elemental',
  'celestial',
  'ooze',
  'swarm of Tiny beasts',
  'plant',
  'construct',
]
const MonsterWrapper = (props) => {
  const { classes } = props;
  const [selectedMonster, setSelectedMonster] = useState(null);
  const [selectedMonsterType, setSelectedMonsterType] = useState(monsterTypes[0]);
  const [suggestionsState, setSuggestionsState] = useState([]);
  const [single, setSingle] = useState('');

  function getSuggestionValue (suggestion) {
    console.log('getSuggestionValue', suggestion)
    setSelectedMonster(suggestion);
    return suggestion.name
  }

  const handleSuggestionsFetchRequested = ({ value }) => {
    console.log('handleSuggestionsFetchRequested', value)
    setSuggestionsState(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    console.log('handleSuggestionsClearRequested')
    setSuggestionsState([]);
  };

  const handleChange = event => {
    console.log('setsingle', event.target.value)
    setSingle(event.target.value || '');
  };

  useEffect(selectMonsters, [selectedMonsterType])

  function selectMonstersByType () {
    if (selectedMonsterType !== 'all') {
      return monsters.filter(monsters => monsters.type && monsters.type === selectedMonsterType)
    }
    return monsters;
  }
  function selectMonsters () {
    let monstersFiltered = selectMonstersByType()
    setSelectedMonster(monstersFiltered[~~(Math.random() * monstersFiltered.length)])
  }
  const handleMonsterTypeChange = event => {
    setSelectedMonsterType(event.target.value);
  }
  const autosuggestProps = {
    renderInputComponent,
    suggestions: suggestionsState,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <>
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="monsterType">Type</InputLabel>
          <Select value={selectedMonsterType} inputProps={{ name: 'monsterType', id: 'monsterType' }} onChange={handleMonsterTypeChange}>
            {monsterTypes.map((type, i) => <MenuItem key={`monsterOption_${i}`} value={`${type}`}>{type}</MenuItem>)}
          </Select>
        </FormControl>
        <Button variant='contained' className={classes.button} onClick={selectMonsters}>Another</Button>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Search',
            value: single,
            onChange: handleChange,
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
      </div>
      <MonsterBlock key={~~(Math.random() * 10000)} monsterString={selectedMonster} />
    </>
  )
}
export default withStyles(styles)(MonsterWrapper);
