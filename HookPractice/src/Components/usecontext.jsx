import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}

function ThemeChange() {
  return (
    <ThemeContext.Provider value="Dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

export default ThemeChange;
