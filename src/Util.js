export function resetLs (type, i = null) {
  let items;
  if (i != null) {
    items = getLs(`${type}`)
  }
  localStorage.clear(`${type}`);
  if (i != null) {
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
  }
  return itemType;
}