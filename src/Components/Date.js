import React from 'react';
import { getDay, getMonth, getYear } from 'date-fns';

function Today () {

  let dat = new Date();
  let d = getDay(dat);
  let m = getMonth(dat);
  let y = getYear(dat);

  return (
    <div>
      {d}/{m}/{y}
    </div>
  )
}

export default Today;