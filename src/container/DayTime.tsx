import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function CurrentDate(): JSX.Element{

    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(dayjs());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

    const formatTime = (date: dayjs.Dayjs) => { 
        const formattedDate = date.format('ddd DD MMM YYYY');
        const formattedTime = date.format('HH:mm:ss');

        return (
        <div>
            <div>{formattedTime}</div>
            <div>{formattedDate}</div>
        </div>
        );
    };

  return (
    <>
      {formatTime(currentTime)}
    </>
  );
}