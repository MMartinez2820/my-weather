import React from 'react';

const Time = () => {
  const hours = new Date()
  const Hour = hours.getHours().toLocaleString()
  const Minut = hours.getMinutes().toLocaleString()
  const Years = hours.getFullYear()
  const date = hours.getDate().toLocaleString()
  const mouth = hours.getMonth().toLocaleString()

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const day = weekday[hours.getDay()]

  console.log( Hour, Minut, Years);
  
  return (
    <div>
     <p> 
   {day} {date}  /{mouth}/  {`${Hour <= 9 ? 0 + Hour : Hour}` }:{`${Minut <= 9 ? 0 + Minut : Minut
    }` } {Years}
      </p>
    </div>
  );
};

export default Time;
