import React,{useContext,useState} from 'react'
import {Form,FormGroup,InputGroup,InputGroupAddon,Input,Button} from 'reactstrap';
import { v4 } from 'uuid';
import {ADD_TODO} from '../Context/Action';
import Todocontext from '../Context/TodoContext';

export default function TodoForm() {
    const [inputtodo ,setInputtodo] = useState('');
    const {dispatch} = useContext(Todocontext);

     const handelSubmit = e => {
         e.preventDefault()
         
         if(inputtodo === ''){alert('please enter todo')}

             const todo ={
                 inputtodo,
                 id : v4()
             }

             dispatch({ type : ADD_TODO , payload: todo})

             setInputtodo('');
     }
    return (
        <div>
            <Form onSubmit={handelSubmit} className='mt-5' >
                <FormGroup>
                    <InputGroup>
                      <Input type='text' value={inputtodo} onChange={e => setInputtodo(e.target.value)} placeholder='Enter your todo ' />
                      <InputGroupAddon addonType='prepend'>
                      <Button  color='warning'>Add</Button>
                      </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        </div>
    )
}
