import tasks from '../tasks.js'


function App() {
  const title = 'Task Manager'
  const backProgress = tasks.filter((task) => task.state === 'backlog' || task.state === 'in_progress')
  const completedTasks = tasks.filter((task) => task.state === 'completed')
  return (
    <>
      <header className='main-header'>
        <h1>{title}</h1>
      </header>
      <main className='container'>
        <section className='list-section  section-one'>
          <h3>Current Tasks ({backProgress.length})</h3>
          <ul className='list'>

            {
              backProgress.map((task) => {

                const { id, title, state, priority, estimatedTime } = task

                return <li key={id}>
                  <div className='list-info'>
                    <span className='info-title'>{title}</span>
                    <span className='state-info'>{state}</span>
                  </div>
                  <div>Priority:{priority}</div>
                  <div>Est. time:{estimatedTime}</div>
                </li>



              })
            }

          </ul>
        </section>
        <section className='list-section'>
          <h3>Current Tasks ({completedTasks.length})</h3>
          <ul className='list'>

            {
              completedTasks.map((task) => {

                const { id, title, state, priority, estimatedTime } = task

                return <li key={id}>
                  <div className='list-info'>
                    <span className='info-title'>{title}</span>
                    <span className='state-info'>{state}</span>
                  </div>
                  <div>Priority:{priority}</div>
                  <div>Est. time:{estimatedTime}</div>
                </li>

              })
            }

          </ul>
        </section>

      </main>

    </>
  )
}

export default App
