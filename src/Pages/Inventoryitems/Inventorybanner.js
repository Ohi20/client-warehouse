import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Inventorybanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen text-white bg-neutral">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
          <DayPicker mode="single"
            selected={date}
            onSelect={setDate}
             />
          <p className='text-center'>You have picked : {format(date, 'PP')}.</p>
          </div>
        </div>
      </div>
    );
};

export default Inventorybanner;