import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new'
        },
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) =>{
        //clone current array to the new one
        const newTodoList = [...todoList];

        //toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };

        newTodoList[idx] = newTodo;

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    return (
        <div>
            <h1>TodoList</h1>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} ></TodoList>
            <div> 
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
            <div>
                <ul>
                    {renderedTodoList.map(todo => (
                        <li>{todo.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}





export default TodoFeature;