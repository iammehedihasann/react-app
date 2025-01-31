// useMemo are working for helps reduce  extra unwanted re-render

import { useState, useMemo } from 'react';

// eslint-disable-next-line react/prop-types
export default function ExpensiveCalculation({ num }) {
    const compute = (num) => {
        console.log("computing ......");
        return num * 2 ;

       
    };
    const addtion = (num) => {
        console.log("Additon....");
        return num + 5;
    }

    const result = useMemo(()=> compute(num),[num]);
    const additon = useMemo(()=>addtion(num),[num]);
    return(
        <div>
            <p>Result: {result}</p>
            <p>Additon: {additon}</p>
        </div>
      
    ) 

}