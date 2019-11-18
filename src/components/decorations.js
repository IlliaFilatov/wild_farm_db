import React from 'react';
import aard from '../images/Effect_Aard.png';
import axii from '../images/Effect_Axii.png';
import igni from '../images/Effect_Igni.png';
import yrden from '../images/Effect_Yrden.png';
import witcher from '../images/witcher.png';
import wildFarm from '../images/wild_farm.png';
import aplaMap from '../images/apla-map.png';

export default function Decorations() {
  return(
    <div className="Decorations">
      <div className="aard sign">
        <img src={aard} alt="" className=""/>
      </div>
      <div className="axii sign">
        <img src={axii} alt="" className=""/>
      </div>
      <div className="igni sign">
        <img src={igni} alt="" className=""/>
      </div>
      <div className="yrden sign">
        <img src={yrden} alt="" className=""/>
      </div>
      <img src={witcher} alt="" className="logo1"/>
      <img src={wildFarm} alt="" className="logo2"/>
      <img src={aplaMap} alt="" className="aplaMap"/>
      <div className="border-line line1"></div>
      <div className="border-line line2"></div>
      <div className="border-line line3"></div>
      <div className="border-line line4"></div>
      <div className="border-line line5"></div>
      <div className="border-line line6"></div>
      <div className="border-line line7"></div>
      <div className="border-line line8"></div>

    </div>
  )
}