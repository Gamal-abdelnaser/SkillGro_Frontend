import { Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

// Counter Hook
const useCounter = (end, duration= 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

// StatItem Component

const StatItem = ({ value, label, bord }) => {
  const count = useCounter(value);

  return (
    <div className={`text-center ${bord} `} >
      <div className="text-[50px] w-full font-bold text-white mb-2" style={{fontSize:"40px", fontWeight:'600'}}>
        {count.toLocaleString()}
        {value.toString().includes('K') ? 'K' : '+'}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

// Counter Section Component
const CounterSection = () => {
  return (
    <div style={{padding: '50px',width:'90%' }} className="bg-[#2A2668] w-[90%]  flex items-center justify-center rounded-3xl  shadow-xl">
      <div className=" w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center">
        <StatItem value={45} label="Active Students" bord={'lined'} />
        <StatItem value={89} label="Faculty Courses" bord={'lined'} />
        <StatItem value={156} label="Best Professors" bord={'lined'} />
        <StatItem value={42} label="Award Achieved" bord={'false'} />
      </div>
    </div>
  );
};

// Main App Component
function MainCounter() {
  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}  style={{marginBottom:'100px'}} >
      <CounterSection />
    </Stack>
  );
}

export default MainCounter;