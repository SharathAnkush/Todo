import {useReducer} from 'react';
import TodoContext from './Context/TodoContext';
import TodoReducer from './Context/Reducer';
import { Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from '../src/Components/Todo'
import TodoForm from '../src/Components/Form'

function App() {
  const [todos,dispatch] = useReducer(TodoReducer,[])
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container>
        <h1 style={{color:'white', display:'flex', justifyContent:'center',borderBottom:'2px solid #ffc107' ,paddingBottom:'1rem' }} >Todo App with Context API</h1>
        <Todo/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
