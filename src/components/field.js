import React from 'react';
import herbArenaria from '../images/herb-arenaria.png';
import herbCelandine from '../images/herb-celandine.png';
import herbRanogrin from '../images/herb-ranogrin.png';
import herbWolfsbane from '../images/herb-wolfsbane.png';
import { useSelector, useDispatch } from 'react-redux';
import { dropSeed, plantSeed, herbHasGrown, setCellFree } from '../actions';

export default function Field() {

  const isWithSeed = useSelector(state => state.field.isWithSeed), 
        plantName = useSelector(state => state.field.plantName),
        arenariaDuration = useSelector(state => state.market.arenaria.time),
        celandineDuration = useSelector(state => state.market.celandine.time),
        ranogrinDuration = useSelector(state => state.market.ranogrin.time),
        wolfsbaneDuration = useSelector(state => state.market.wolfsbane.time),
        isCellsEmpty = useSelector(state => state.field.isEmpty),
        dispatch = useDispatch(),
        lowerBrightness = () => document.getElementsByClassName('Field')[0].style.filter = 'brightness(1)';

  function plant(e) {
    let cell = e.target,
        cellNumber = cell.getAttribute('data-cell'),
        cellImage = cell.getElementsByTagName('img')[0],
        cellGrowing = cell.getElementsByClassName('growing')[0];

    function growingSeed(herbName, herbDuration, growingAnimation) {
      cellImage.src = herbName;
      dispatch(dropSeed(cellNumber));
      lowerBrightness();
      dispatch(plantSeed(plantName));
      cellGrowing.classList.add(growingAnimation);
      new Promise((res,rej)=>{
        setTimeout(() => {
          res(dispatch(herbHasGrown(plantName)));
        }, herbDuration);
      }).then((result)=>{
        dispatch(setCellFree(cellNumber));
        cellImage.removeAttribute('src');
        cellGrowing.classList.remove(growingAnimation);
      }) 
    }
    
    if(isWithSeed && isCellsEmpty[cellNumber]) {
      switch (plantName) {
        case 'arenaria':
          growingSeed(herbArenaria, arenariaDuration, 'arenaria-animation');
          break;
        case 'celandine':
          growingSeed(herbCelandine, celandineDuration, 'celandine-animation');
          break;
        case 'ranogrin':
          growingSeed(herbRanogrin, ranogrinDuration, 'ranogrin-animation');
        break;
        case 'wolfsbane':
          growingSeed(herbWolfsbane, wolfsbaneDuration, 'wolfsbane-animation');
          break;
        default:
          console.log('0')
          break;
      }
    }
  }

  return (
      <div className="Field">
        <div className="cell" data-cell="0" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="1" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="2" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="3" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="4" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="5" onClick={e => plant(e)}>
          <img alt=""/> 
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="6" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="7" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="8" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
      </div>
  )
}