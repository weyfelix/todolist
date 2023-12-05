import './Empty.css'
import clipboard from './src/assets/Clipboard.png'

export function Empty () {

  return (
    <div className='Empty'>
        <img src={clipboard} alt="clipboard" />
        <p>
        <span>Você ainda não tem tarefas cadastradas</span><br />
        Crie tarefas e organize seus itens a fazer
        </p>

        
    </div>
  )
}