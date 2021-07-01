import React from 'react'

const ToDo = ({setToDos,toDos,items,text,completed}) => {
    const deleteHandler =() =>
    {
        setToDos(toDos.filter((el)=>el.id!==items.id));
    };

    const completeHandler = () =>
    {
        setToDos(toDos.map(val =>
            {
                if(val.id===items.id)
                {
                    return{
                        ...val,completed:!val.completed
                    }
                }
                return val;
            }) )
            
    }

    return (
        <div className="todo">
            <li className={`todo-item ${items.completed?"completed":""} `}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default ToDo;