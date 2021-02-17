import {useReducer} from 'react';
import {TodoContext} from './Context/TodoContext';
import {TodoReducer} from './Context/Reducer';

function App() {
  const [todos,dispatch] = useReducer(TodoReducer,[])
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      
    </TodoContext.Provider>
  );
}

export default App;
