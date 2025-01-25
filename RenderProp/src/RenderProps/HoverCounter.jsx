

// eslint-disable-next-line react/prop-types
export default function HoverCounter({ count , incrementCount }) {
  return (
    <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  );
}
