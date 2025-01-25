import Counter from './Counter';
import HoverCounter from './RenderProps/HoverCounter';
import ClickCounter from './RenderProps/ClickCounter';

function App() {
  return (
    <div className = "app">
       <Counter 
        render={(counter, incrementCount)=>(
          <ClickCounter count={counter} incrementCount={incrementCount} />

        )}
       />
       <Counter
          render={(counter, incrementCount) => (
            <HoverCounter  count={counter} incrementCount={incrementCount} />
          )}
       />
    </div>
  )
}

export default App;
