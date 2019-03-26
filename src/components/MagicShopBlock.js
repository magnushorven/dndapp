import React from 'react';
import './Block.css';
import LSButtons from './LSButtons';
function renderLine () {
  return (
    <div>
      <svg><polyline points="0,0 700,2.5 0,5" style={{ fill: "#922610", stroke: "#922610" }}></polyline></svg>
    </div>
  )
}

function MagicShopBlock ({
  MagicShop,
  FetchNew = () => { },
  showButtons = true
}) {
  if (!MagicShop || MagicShop === '') { return null; }

  return (
    <div className="bloc">
      <div className={`monstre`}>
        {MagicShop.name ? <h1 onClick={() => FetchNew('name')}>{MagicShop.name}</h1> : null}
        {renderLine()}
        {MagicShop.location ? (<><h2 onClick={() => FetchNew('location')}>Location</h2><div className="sansSerif">{MagicShop.location}</div></>) : null}
        {renderLine()}
        {MagicShop.description ? (<><h2 onClick={() => FetchNew('description')}>Description</h2><div className="sansSerif">{MagicShop.description}</div></>) : null}
        {MagicShop.items ? (
          <>
            {renderLine()}
            <h2 onClick={() => FetchNew('items')}>Items</h2>
            <div className="sansSerif">{MagicShop.items.map((item, i) => <p key={i}>{item}</p>)}</div>
          </>) : null}
      </div>
      {showButtons && <LSButtons localStorageString={'shop'} string={MagicShop} />}
    </div>
  );
}

export default MagicShopBlock;