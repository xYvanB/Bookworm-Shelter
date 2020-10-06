import React from 'react';
import { getDate, getMonth, getYear } from 'date-fns';

function Today () {

  let day = new Date();
  let d = getDate(day);
  let m = getMonth(day);
  let y = getYear(day);

  return (

    <div>
      {d}/{m}/{y}
    </div>
  
  )
}

export default Today;