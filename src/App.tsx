import { useState } from 'react';

import './App.css';

import { Inputs } from './components/Input/Inputs';
import { Values } from './components/Input/types';
import { Output } from './components/Output/Output';

function App() {
   const [date, setDate] = useState<Values>({});

   const enterDate = new Date(Number(date.year), Number(date.mouth) - 1, Number(date.day));
   const actualDate = Date.now();
   const remainderDays = (actualDate - enterDate.getTime()) / 1000 / 60 / 60 / 24;
   const remainderMonths = remainderDays / 30.4375;
   const dateBase = {
      year: Math.floor(remainderMonths / 12),
      month: Math.floor(remainderMonths) % 12,
      day: Math.floor(remainderDays % 30.4375),
   };

   return (
      <>
         <div className="wrapper">
            <div className="container">
               <div className="calculator">
                  <Inputs setDate={setDate} />
                  <Output value={dateBase} />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
