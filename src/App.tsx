import { useState } from "react"

function App() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')

  interface Task {
    id: string;
    title: string;
  }

  const createTask = (title: string) => {
    const id = crypto.randomUUID()
    setTaskList([...taskList, { id, title }])
    setTaskTitle('')
  }

  const removeTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id))
    return
  }

  return (
    <>
      <h1>Projeto Lista de Tarefas</h1>
      <div id="task-new">
        <label htmlFor="task">Insira a tarefa</label>
        <input type="text" name="task" id="task-input" value={taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
        <button id="task-button" onClick={() => createTask(taskTitle)}>Incluir</button>
      </div>

      <div id="task-list">
        <h2>Lista de Tarefas</h2>
        {taskList.length === 0 ? 'Sem tarefas!' : ''}
        {taskList.map(task => {
          return (
            <div key={task.id} className="card">
              <input type="checkbox" id="task-title-checkbox" />
              <label htmlFor="task-title-checkbox">{task.title}</label>
              <button className="task-remove" onClick={() => removeTask(task.id)}>Remover</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
