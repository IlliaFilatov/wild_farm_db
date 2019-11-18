import React from 'react';
import herbArenaria from '../images/herb-arenaria.png';
import herbCelandine from '../images/herb-celandine.png';
import herbRanogrin from '../images/herb-ranogrin.png';
import herbWolfsbane from '../images/herb-wolfsbane.png';
import stock from '../images/stock.png';
import oren from '../images/currency-oren.png';
import { sellHerbPart, sellCoinsPart } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Stock() {
  
  const arenariaHerbPrice = useSelector(state => state.market.arenaria.sale),
        celandineHerbPrice = useSelector(state => state.market.celandine.sale),
        ranogrinHerbPrice = useSelector(state => state.market.ranogrin.sale),
        wolfsbaneHerbPrice = useSelector(state => state.market.wolfsbane.sale),
        arenariaHerbAmount = useSelector(state => state.stock.arenaria),
        celandineHerbAmount = useSelector(state => state.stock.celandine),
        ranogrinHerbAmount = useSelector(state => state.stock.ranogrin),
        wolfsbaneHerbAmount = useSelector(state => state.stock.wolfsbane),
        dispatch = useDispatch();

  function sell(e) {
    let target = e.target;
    let herb = target.closest('.item').getAttribute('data-herb');

    switch (herb) {
      case 'arenaria':
        if(arenariaHerbAmount > 0) {
          dispatch(sellHerbPart(herb));
          dispatch(sellCoinsPart(arenariaHerbPrice));
        }
        break;
      case 'celandine':
        if(celandineHerbAmount > 0) {
          dispatch(sellHerbPart(herb));
          dispatch(sellCoinsPart(celandineHerbPrice));
        }
        break;
      case 'ranogrin':
          if(ranogrinHerbAmount > 0) {
            dispatch(sellHerbPart(herb));
            dispatch(sellCoinsPart(ranogrinHerbPrice));
          }
        break;
      case 'wolfsbane':
          if(wolfsbaneHerbAmount > 0) {
            dispatch(sellHerbPart(herb));
            dispatch(sellCoinsPart(wolfsbaneHerbPrice));
          }
        break;
      default:
        console.log('0');
        break;
    }
  }

  return (
      <div className="Stock Menu">
        <div className="menu_name">
          <img src={stock} alt=""/>
        </div>
        <div className="item" title="arenaria" data-herb="arenaria" onClick={(e) => sell(e)}>
          <img src={herbArenaria} alt=""/>
          <div className="amount">{arenariaHerbAmount}</div>
          <div className="info">
            <p>
              <span>{'sale: ' + arenariaHerbPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item" title="celandine" data-herb="celandine" onClick={(e) => sell(e)}>
          <img src={herbCelandine} alt=""/>
          <div className="amount">{celandineHerbAmount}</div>
          <div className="info">
            <p>
              <span>{'sale: ' + celandineHerbPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item" title="ranogrin" data-herb="ranogrin" onClick={(e) => sell(e)}>
          <img src={herbRanogrin} alt=""/>
          <div className="amount">{ranogrinHerbAmount}</div>
          <div className="info">
            <p>
              <span>{'sale: ' + ranogrinHerbPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item" title="wolfsbane" data-herb="wolfsbane" onClick={(e) => sell(e)}>
          <img src={herbWolfsbane} alt=""/>
          <div className="amount">{wolfsbaneHerbAmount}</div>
          <div className="info">
            <p>
              <span>{'sale: ' + wolfsbaneHerbPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
      </div>
  )
}