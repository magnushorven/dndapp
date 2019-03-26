export function resetLs (type, i = null) {
  console.log('resetLs', type, i)
  let items;
  if (i !== null) {
    items = getLs(`${type}`)
  }
  localStorage.removeItem(`${type}`);
  if (i !== null) {
    saveLs(`${type}`, [].concat(items.slice(0, i), items.slice(i + 1, items.length)))
  }
}

export function saveLs (type, item) {
  const items = getLs(`${type}`)
  items.push(item)
  localStorage.setItem(`${type}`, JSON.stringify(items));
}

export function getLs (type) {
  const items = JSON.parse(localStorage.getItem(`${type}`)) || []
  return items
}

export function renderItemType (type) {
  let itemType = 'none';
  switch (type) {
    case '$':
      itemType = 'Currency'
      break;
    case 'LA':
      itemType = 'Light Armory'
      break;
    case 'MA':
      itemType = 'Medium Armor'
      break;
    case 'HA':
      itemType = 'Heavy Armor'
      break;
    case 'R':
      itemType = 'Ranged'
      break;
    case 'A':
      itemType = 'Ammo'
      break;
    case 'M':
      itemType = 'Martial'
      break;
    case 'P':
      itemType = 'Potion'
      break;
    case 'S':
      itemType = 'Slashing'
      break;
    case 'W':
      itemType = 'Wonderous'
      break;
    case 'G':
      itemType = 'Generic'
      break;
    case 'RD':
      itemType = 'Rods'
      break;
    case 'RG':
      itemType = 'Ring'
      break;
    case 'SC':
      itemType = 'Scroll'
      break;
    case 'ST':
      itemType = 'Staff'
      break;
    case 'WD':
      itemType = 'Wand'
      break;
    default:
      break;
  }
  return itemType;
}
export function formatMagicShop (description, location, name, items) {
  return { description: description, location: location, name: name, items: items }
}

export function getRandomSubarray (items, size) {
  var shuffled = items.slice(0), i = items.length, temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}
export function ParseAbilityScoreAndModifier (score) {
  return `${score} (${~~(((score < 10 ? score - 1 : score) - 10) / 2)})`
}