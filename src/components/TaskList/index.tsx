import { useEffect, useState } from "react";
import { FiTrash2, FiPlusCircle } from 'react-icons/fi'

import './style.scss';

export interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(()=> {
        const tasksStorage = localStorage.getItem('@todo:tasks-1.0.0');
        if (tasksStorage) {
            return JSON.parse(tasksStorage);
        }
        return [];
    });

        const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        const stateJSON = JSON.stringify(tasks);
        localStorage.setItem('@todo:tasks-1.0.0', stateJSON);
        }, [tasks]);
    
    function handleCreateNewTask() {

        if (!newTaskTitle) return;

        const newTask = {
            id: Math.random(),
            title: newTaskTitle,
            isComplete: false
        }
        setTasks(oldState => 
            [...oldState, newTask]
            );
            setNewTaskTitle('');
}

    function handleToggleTaskCompletion(id: number) {

        const newCheck = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        } : task);

        setTasks(newCheck)
    }

    function handleRemoveTask(id: number) {
        const filterTaskId = tasks.filter(task => task.id !== id)
        setTasks(filterTaskId)
    }

    return (
        <>
            <section className="container">
                <header>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Adicionar uma nova tarefa"
                            onChange={ (e) => setNewTaskTitle(e.target.value) }
                            value={ newTaskTitle }
                        />
                        <button type="submit" data-testid="add-task-button" onClick={ handleCreateNewTask }>
                            Criar
                            <FiPlusCircle size={ 16 } color="#f2f2f2" className="iconPlus" />
                        </button>
                    </div>
                </header>
            </section>
            <main >
                <div className="tasks-list" >
                    <ul>
                        { tasks.map(task => (
                            <li className="task" key={ task.id }>
                                <div className={ task.isComplete ? 'completed' : '' } data-testid="task" >
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            readOnly
                                            checked={ task.isComplete }
                                            onClick={ () => handleToggleTaskCompletion(task.id) }
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    <p>{ task.title }</p>
                                </div>
                                <button type="button" data-testid="remove-task-button" onClick={ () => handleRemoveTask(task.id) }>
                                    <FiTrash2 size={ 24 } />
                                </button>
                            </li>
                        )) }
                    </ul>
                </div>
            </main>
        </>
    )
}