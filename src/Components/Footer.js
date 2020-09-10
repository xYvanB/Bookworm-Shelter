import React from 'react';
import Clock from 'react-digital-clock';
import Date from './Date.js'

function Footer () {

  return (
    <div className="Footer">
      <div className="Copyright">
        Copyright © 2020 Bookworm Shelter Ltd. 
        <br></br>
        All Rights Reserved.
      </div>
      <div className="Info">
        <Date />
        <Clock hour12 = {false}/>
      </div>
    </div>
  )
}

export default Footer