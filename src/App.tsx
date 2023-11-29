import './App.css'

function App() {

  return (
    <div className='container'>
        <div className='header'>
              <img src="./src/assets/Logo.png" alt="Logo ToDo List" />
        </div>
        <div className='corpo'>
          <div className='inputTask'>
              <input type="text" placeholder='Adicione uma nova tarefa'/>
              <button className='buttonCriar'>Criar <img src="./src/assets/plus.png" alt="" /></button>
          </div>
          <div className='containerTaks'>

          </div>
        </div>
    </div>
  )
}

export default App
