import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';

interface ContainerProps {
  name: string;
}

const Widgets: React.FC<ContainerProps> = ({ name }) => {
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [period, setPeriod] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let newHours = now.getHours();
      const newMinutes = String(now.getMinutes()).padStart(2, '0');
      const newPeriod = newHours >= 12 ? 'PM' : 'AM';

      if (newHours > 12) {
        newHours -= 12; // Convert to 12-hour format
      } else if (newHours === 0) {
        newHours = 12; // Midnight should be 12 AM
      }

      setHours(String(newHours).padStart(2, '0'));
      setMinutes(newMinutes);
      setPeriod(newPeriod);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex fixed top-36 -right-24 h-auto transform -translate-x-1/2 mx-auto  backdrop-blur-lg w-8/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-auto rounded-2xl">
      <div className=" rounded-2xl font-mono font-bold text-7xl text-white grid grid-cols-2 gap-x-px">
        <div className="relative  rounded-2xl p-8">

          <div className="absolute inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br rounded-t-2xl from-gray-800/50 to-slate-900/50"></div>
            <div className="bg-gradient-to-br rounded-b-2xl from-gray-700/50 to-slate-900/50"></div>
          </div>
          <span className="relative">{hours}</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full bg-gray-700/50"></div>
          </div>
        </div>
        <div className="relative  rounded-2xl p-8">

          <div className="absolute inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br rounded-t-2xl from-gray-800/50 to-slate-900/50"></div>
            <div className="bg-gradient-to-br rounded-b-2xl from-gray-700/50 to-slate-900/50"></div>
          </div>
          <span className="relative">{minutes}</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full bg-gray-700/50"></div>
          </div>
        </div>

      </div>
      <div className="text-lg absolute bottom-1 left-3">{period}</div>
    </div>
  );
};

export default Widgets;