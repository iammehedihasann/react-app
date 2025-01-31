 # React Hooks Explained
 ### Introduction to React hooks
 React Hooks are functions that allow you to use state and other React features in functional components without writting class components.They wew introduced in React 16.8 to make functional components more powerful and easier to manage.

 ### Why Use Hooks?
- Simplifies Code - No need for class Components.
- Improves Readability -Hooks make code more readable and maintainabale.
- Reusability -Custom hooks allow code reuse.
- Better Performance - Hooks optimize rendering and avoid unccessary computations.
  
 ### Types of React Hooks
 React provides several built-in hooks that can be optimized into basic and advanced hooks.
 #### 1. Basic Hooks   
 - useState allows functional components to maintain local state.
- Helps in handling user inputs, toggling UI elements, and other state-related changes.
  
####  useEffect-Handling Side Effect
- useEffect is used for side effects like fetching data, modifying the DOM, or subscribing to events.
- It runs after the render and can be controlled using dependencies.

####  useContext – Managing Global State
- useContext enables sharing state across multiple components without prop drilling
- Works well for theming, authentication, or any globally required data.


 #### 2. Advanced Hooks   
 - useState allows functional components to maintain local state.
- Helps in handling user inputs, toggling UI elements, and other state-related changes.
  
####  useRef – Accessing DOM Elements
- useRef provides a reference to a DOM element or persists values between renders without causing re-renders.
- Commonly used for managing focus, animations, and performance optimizations.

####  useReducer – Handling Complex State
- Improves Readability - Hooks make code more readable and maintainable.
- Reusability - Custom hooks allow code reuse.
- Better Performance - Hooks optimize rendering and avoid unnecessary computations.
  
####  useMemo – Optimizing Performance
- useMemo memoizes computations to avoid unnecessary recalculations.
- Useful for expensive calculations that depend on changing state or props.

####  useCallback – Preventing Unnecessary Function Recreation
- useCallback ensures functions are not recreated on every render unless dependencies change.
- Optimizes performance in components with frequent renders.

### 3.Summary of Hooks and Their Uses
- useCallback ensures functions are not recreated on every render unless dependencies change.
- Optimizes performance in components with frequent renders.-useState - Manage local state in functional components.
- useEffect - Handle side effects and lifecycle events.
- useContext - Share global state without prop drilling.
- useRef - Access and persist values without re-rendering.
- useReducer - Manage complex state logic.
- useMemo - Optimize expensive calculations.
- useCallback - Optimize function performance.



