import './Empty.css'

export function Empty () {
  return (
    <div className='Empty'>
        <img src="./src/assets/Clipboard.png" alt="" />
        <p>
        <span>Você ainda não tem tarefas cadastradas</span><br />
        Crie tarefas e organize seus itens a fazer
        </p>
    </div>
  )
}