import './Task.css'

interface taskProps {
  id: string;
  status: boolean;
  textTask: string;
  handleTrashTask: (id: string) => void;
  handleInputTask: (id: string) => void;
}

export function Task ({id, status, textTask, handleTrashTask, handleInputTask}: taskProps) {
  function deleteTask () {
    handleTrashTask(id)
  }

  function flagTask () {
    handleInputTask(id)
  }

  return (
    <div className='Task'>
      <div id='itemA'>
        <div className="round">
          <input type="checkbox" id={id} checked={status} onClick={flagTask}/>
          <label htmlFor={id}></label>
        </div>
        <label htmlFor={id}>
          <p>{textTask}</p>
        </label>
      </div>
      <span id='itemB'>
        <button onClick={deleteTask}/>
      </span>
  </div>
  )
}