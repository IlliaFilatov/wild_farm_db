import React from 'react';
import seedsArenaria from '../images/seeds-arenaria.png';
import seedsCelandine from '../images/seeds-celandine.png';
import seedsRanogrin from '../images/seeds-ranogrin.png';
import seedsWolfsbane from '../images/seeds-wolfsbane.png';
import market from '../images/market.png';
import oren from '../images/currency-oren.png';
import { buySeeds } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Market() {

  const arenariaSeedsPrice = useSelector(state => state.market.arenaria.buy),
        celandineSeedsPrice = useSelector(state => state.market.celandine.buy),
        ranogrinSeedsPrice = useSelector(state => state.market.ranogrin.buy),
        wolfsbaneSeedsPrice = useSelector(state => state.market.wolfsbane.buy),
        coinsAmount = useSelector(state => state.invent.coins),
        dispatch = useDispatch();

  function buy(e) {
    let seeds = e.target.closest('.item').getAttribute('data-seeds');

    switch (seeds) {
      case 'arenaria':
        if(arenariaSeedsPrice <= coinsAmount) {
          dispatch(buySeeds(seeds, arenariaSeedsPrice));
        }
        break;
      case 'celandine':
        if(celandineSeedsPrice <= coinsAmount) {
          dispatch(buySeeds(seeds, celandineSeedsPrice));
        }
        break;
      case 'ranogrin':
          if(ranogrinSeedsPrice <= coinsAmount) {
            dispatch(buySeeds(seeds, ranogrinSeedsPrice));
          }
        break;
      case 'wolfsbane':
          if(wolfsbaneSeedsPrice <= coinsAmount) {
            dispatch(buySeeds(seeds, wolfsbaneSeedsPrice));
          }
        break;
      default:
        console.log('0');
        break;
    }
  }

  return (
      <div className="Market Menu">
        <div className="menu_name">
          <img src={market} alt=""/>
        </div>
        <div className="item" title="arenaria" data-seeds="arenaria" onClick={(e) => buy(e)}>
          <img src={seedsArenaria} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + arenariaSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item" title="celandine" data-seeds="celandine" onClick={(e) => buy(e)}>
          <img src={seedsCelandine} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + celandineSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item" title="ranogrin" data-seeds="ranogrin" onClick={(e) => buy(e)}>
          <img src={seedsRanogrin} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + ranogrinSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item" title="wolfsbane" data-seeds="wolfsbane" onClick={(e) => buy(e)}>
          <img src={seedsWolfsbane} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + wolfsbaneSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
      </div>
  )
}