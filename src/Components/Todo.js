import React,{useContext} from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
import { REMOVE_TODO } from '../Context/Action'
import TodoContext from '../Context/TodoContext'

export default function Todo() {
    const {todos, dispatch} = useContext(TodoContext)
    return (
       <ListGroup className='mt-5 mb-2 iteams'>
           {todos.map(todo => (
               <ListGroupItem key={todo.id}>
                   {todo.inputtodo}
                   <span onClick={() => dispatch({type:REMOVE_TODO,payload:todo.id})} className='float-right'>X</span>
               </ListGroupItem>
           ))}
       </ListGroup>
    )
}
