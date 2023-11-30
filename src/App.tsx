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
          <div className='Tasks'>
            <div className='Info'>
              <div className='Created'>
                <strong>Tarefas criadas</strong><span>5</span>
              </div>
              <div className='Done'>
                <strong>Concluídas</strong><span>2 de 5</span>
              </div>
            </div>
            {/* <div className='Empty'>
                <img src="./src/assets/Clipboard.png" alt="" />
                <p>
                 <span>Você ainda não tem tarefas cadastradas</span><br />
                 Crie tarefas e organize seus itens a fazer
                </p>
            </div> */}

            <div className='List'>
                <div className='Task'>
                  <div className="round">
                    <input type="checkbox" id="checkbox1" />
                    <label htmlFor="checkbox1"></label>
                  </div>
                  <label htmlFor="checkbox1">
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                  </label>
                  <span><button /></span>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
