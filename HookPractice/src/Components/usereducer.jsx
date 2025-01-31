// UseReducer are  work likly as useState but it manange the big and critical problem easily.

import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "increase":
            return{ count : state.count + 1 };
        case "decrease":
            return { count: state.count - 1 };
        default:
            return state;    
    }
}

export default function CountNumber() {
    const [state, dispatch] = useReducer(reducer, {count : 0});

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increase"})}>+</button>
            <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        </div>
    );
}





  

// export default Counter;
