
// perform the Direct accessing DOM Element 
// Do perfom direct access DOM element and use for  keep the value without re-render in DOM;
// Example like : Auto-Focus on an input field.


import { useRef, useEffect} from 'react';


export default function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

    },[]);

    return <input ref={inputRef} placeholder="Type here...." />

}