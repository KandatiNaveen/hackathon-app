import React, { useState, useEffect } from 'react';


export default function Timer({ targetDate, endDate }){
  const [countdown, setCountdown] = useState('');
  const [status, setStatus] = useState(''); 

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate).getTime();
      const end = new Date(endDate).getTime();
      const difference = target - now.getTime();

      if (difference > 0) {
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown(`Starts In ${days}d ${hours}h ${minutes}m ${seconds}s`);
        setStatus('upcoming'); 
      } else {
        const endDifference = end - now.getTime();
        if (endDifference > 0) {
          
          const days = Math.floor(endDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((endDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((endDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((endDifference % (1000 * 60)) / 1000);

          setCountdown(`Ends In ${days}d ${hours}h ${minutes}m ${seconds}s`);
          setStatus('active'); 
        } else {
         
          clearInterval(timer);
          const dateObject = new Date(endDate);
          const day = dateObject.getDate();
          const month = dateObject.getMonth() + 1;
          const year = dateObject.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;

          setCountdown(`Ended on ${formattedDate}`);
          setStatus('past'); 
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, endDate]);

  return (
    <div>
      <div>{countdown}</div>
      <div>Status: {status}</div> 
    </div>
  );
};
