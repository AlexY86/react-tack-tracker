import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Paper } from '@mui/material'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Tasks from './components/tasks/Tasks'
import AddTask from './components/addTask/AddTask.js'
import About from './pages/about/About'

import './App.css';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false) //default false state
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks function
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json()

    return data
  }

  // Fetch Task function using ID
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task function
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  // Delete Task function
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  // Toggle Complete function
  const toggleComplete = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, complete: !taskToToggle.complete }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      //put headers because you are sending data
      headers: {
        'Content-type': 'application/json',
      },
      //convert to json string
      body: JSON.stringify(updTask),
    })
    // wait on the response 
    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: data.complete } : task
      )
    )
  }

  return (
    <Router>
      <Paper className='container' elevation={8}>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleComplete}
                  />
                ) : (
                  'You are all caught up!!'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Paper>
    </Router>
  )
}

export default App