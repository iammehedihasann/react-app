
import { useState, useEffect  } from 'react';

export default function Countable() {
    const[count, setCount ] = useState(0);

    useEffect(() => {
        console.log(`Count changed: ${count}`);

    },[count]);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>ClickForIncrease</button>
        </div>
    );
}