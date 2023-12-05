

import './App.css';

import imgPlus from './assets/plus.png'
import logo from './assets/Logo.png'


import { Task } from './Task';
import { Empty } from './Empty';
import {useEffect, useState, FormEvent, ChangeEvent} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface taskInterface {
  id: string
  status: boolean
  textTask: string
}

function App() {

  const [countStatusTrue, setCountStatusTrue] = useState(0)
  const [TaskList, setTaskList] = useState<taskInterface[]>([])
  const [newTaskText, setNewTaskText] = useState<string>('')

  function countTaskCompleted () {
    const completedCount = TaskList.filter(tsk => tsk.status === true).length;
    setCountStatusTrue(completedCount);
  }

  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();
 
   const newTask = {
      id: uuidv4(),
      status: false,
      textTask: newTaskText
    }
    setTaskList([...TaskList, newTask])
    setNewTaskText('')
  }

  function handleNewTaskText (event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleTrashTask (id: string) {
    const tasksWithoutDeleteOne = TaskList.filter(task => task.id !== id);
    setTaskList(tasksWithoutDeleteOne)
  }

  function handleInputTask (id: string) {
    const updatedTaskList = TaskList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: !task.status,
        };
      }
      return task;
    });

    setTaskList(updatedTaskList);
  }

  useEffect(() => {
    countTaskCompleted();
  }, [TaskList]);


  return (
    <div className='container'>
        <div className='header'>
              <img src={logo} alt="Logo ToDo List" />
        </div>
        <div className='corpo'>
          <div className='inputTask'>
              <form onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    name='textTask' 
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskText}
                    required
                    />
                <button type='submit' className='buttonCriar'>Criar <img src={imgPlus} alt="ImgPlus" /></button>
              </form>
          </div>
          <div className='Tasks'>
            <div className='Info'>
              <div className='Created'>
                <strong>Tarefas criadas</strong><span>{TaskList.length}</span>
              </div>
              <div className='Done'>
                <strong>Concluídas</strong><span>{countStatusTrue} de {TaskList.length}</span>
              </div>
            </div>

            {TaskList.length === 0 ? (
                <Empty />
              ) : (
                <div className='List'>
                  {TaskList.map(tsk => (
                    <Task 
                      key={tsk.id}
                      id={tsk.id}
                      status={tsk.status}
                      textTask={tsk.textTask}
                      handleTrashTask={handleTrashTask}
                      handleInputTask={handleInputTask}
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
    </div>
  )
}

export default App
