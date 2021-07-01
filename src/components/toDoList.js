import React from 'react'
import ToDo from './toDo';
const ToDoList = ({setToDos,toDos}) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        toDos.map((items,index)=>
                        {
                            return(
                                <ToDo setToDos={setToDos} toDos={toDos} items={items} key={items.id} text={items.text} completed={items.completed} />
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
export default ToDoList
