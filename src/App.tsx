
import './App.css'
import AddToDo from './components/ToDoAdd'
import TodosList from './components/TodosList'
import Navbar from './components/NavBar'
import Container from '@mui/material/Container';

function App() {

  return (
    <>
      <Container maxWidth="sm">
      <h1>TODO APP REACT + TYPESCRIPT</h1>
      <p className="read-the-docs">
        First React + TypeScript Project
      </p>
      <Navbar/>
      <AddToDo/>
      <TodosList/>
      </Container>
      
    </>
  )
}

export default App
