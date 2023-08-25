import React, { useEffect, useState } from 'react'
import './Home.scss'
import { MdDeleteOutline } from 'react-icons/md'

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');
    const [selectedTab, setSelectedTab] = useState('all');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = () => {
        if (inputText) {
            const newTask = { text: inputText, completed: false };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setInputText('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const visibleTasks = tasks.filter((task) => {
        if (selectedTab === 'active') {
            return !task.completed;
        }
        if (selectedTab === 'completed') {
            return task.completed;
        }
        return true;
    });

    const taskDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteCompletedTasks = () => {
        const updatedTasks = tasks.filter(task => !task.completed);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className='tasks'>
            <ul className='tasks__filter'>
                <li
                    className={`tasks__filter-tab ${selectedTab === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('all')}
                >
                    All
                </li>
                <li
                    className={`tasks__filter-tab ${selectedTab === 'active' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('active')}
                >
                    Active
                </li>
                <li
                    className={`tasks__filter-tab ${selectedTab === 'completed' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('completed')}
                >
                    Completed
                </li>
            </ul>
            <div className='tasks__filter-form'>
                <input
                    className='tasks__filter-form-input'
                    type="text"
                    name='text'
                    id='text'
                    placeholder='add details'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className='tasks__filter-form-button' onClick={addTask}>
                    Add
                </button>
            </div>
            <ul className='tasks__filter-list'>
                {visibleTasks.map((task, i) => (
                    <li
                        key={i}
                        className={`tasks__filter-list-item ${task.completed ? 'completed' : 'active'}`}
                    >
                        <input
                            className='tasks__filter-list-item-checkbox'
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(i)}
                        />
                        {task.text}
                        {selectedTab === 'completed' && (
                            <>
                                <MdDeleteOutline
                                    className='tasks__filter-list-item-icon'
                                    onClick={() => taskDelete(i)}
                                />
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {selectedTab === 'completed' && visibleTasks.some(task => task.completed) && (
                <button className='button' onClick={deleteCompletedTasks}>
                    <MdDeleteOutline className='button__icon' /> delete all
                </button>
            )}
        </div>
    );
};

export default Home;






