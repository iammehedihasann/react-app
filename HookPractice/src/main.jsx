import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './App.jsx';
import Countable from './Components/useffect.jsx';
import ThemeChange from './Components/usecontext.jsx';
import FocusInput from './Components/useref.jsx';
import CountNumber from './Components/usereducer.jsx';
import ExpensiveCalculation from './Components/usememo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Countable />
    <ThemeChange />
    <FocusInput />
    <CountNumber />
    <ExpensiveCalculation />
  </StrictMode>,
)
