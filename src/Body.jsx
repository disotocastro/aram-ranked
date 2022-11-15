import React, { useState } from 'react';
import rank from './Assets/gold-icon.png'
import data from './data'

const Body = () => {

  let index = 0

  const [lp, setLp] = useState(0);
  const division = ["IV", "III", "II", "I"]

  function loseLp() {
    setLp(lp - 15)
  }
  function winLp() {
    setLp(lp + 25)
  }

  if (lp > 100) {
    index++
  }

  console.log(data[3].img);
  console.log(index);




  return (
    <div>
      <h1>Your current rank is: </h1>
      <div className="img-container">
        <img src={'./Assets/'} alt="" />
        <span> GOLD {division[index]} {lp} LP</span>
      </div>
      <div className="addpoints">
        <span
          className='lp-btn lp-lose'
          onClick={loseLp}
        >
          LOSE
        </span>
        <span
          className='lp-btn lp-win'
          onClick={winLp}
        >
          WIN
        </span>
      </div>
    </div>
  );
};

export default Body;