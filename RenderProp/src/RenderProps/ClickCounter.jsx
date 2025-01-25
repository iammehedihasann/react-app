

// eslint-disable-next-line react/prop-types
export default function ClickCounter({ count, incrementCount }){
    return(
        <div>
            <button type="button" onClick={incrementCount}>
                clicked { count } times
             </button>
        </div>
    );
}