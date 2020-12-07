import React, {useState} from 'react'

function ToDoList({todo, index}) {
    return (
        <div className='row'>
            <div className='col'>{index+1}</div>
            <div className='col'>{todo.text}</div>
            <div className='col'>{todo.isCompleted ? 'Done' : 'In progress'}</div>
        </div>
    )
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit= e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value} 
            placeholder='Add new Task...'
            onChange={e => setValue
            (e.target.value)}/>
        </form>
    )
}


function ToDo() {
    const [todos, setTodos] = useState([
        {
            text: 'Idomi pamoka',
            isCompleted: false
        },
        {
            text: 'Nuvaziuoti i kirpykla',
            isCompleted: false
        },
        {
            text: 'Paziureti filma anglu kalba',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    }


    return (
        <div className='table table-dark'>
            {todos.map((todo, index)=>(
                <ToDoList key={index} index={index} todo={todo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default ToDo
