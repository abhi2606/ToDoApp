
import { useSearchParams } from "react-router-dom";
import { useTodos } from "../contexts/todos";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


const Todos = () => {
  const {todos,toggleTodoAsCompleted,handleDeleteTodo} = useTodos();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
    
  let filterdata = todos;

  if (todosData == "done") {
    filterdata =filterdata.filter((task) =>task.done)
  }
  if (todosData == "active") {
    filterdata =filterdata.filter((task) =>!task.done)
  }
  return (
    <List sx={{ width: '100%', maxWidth: 475, bgcolor: 'background.paper' }}>

      {
          filterdata.map((todo) => {
            return <ListItem disablePadding key={todo.id}
          >
            <ListItemButton style={{paddingLeft:0}} role={undefined} dense>
              <Checkbox color="secondary" checked={todo.done} id={`todo-${todo.id}`} onChange={() => toggleTodoAsCompleted(todo.id)}  />
              <ListItemText  id={`todo-${todo.id}`} primary={todo.task} ></ListItemText>
              {todo.done && (
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {handleDeleteTodo(todo.id)}}>Delete</Button>
              )}
            </ListItemButton>
              
            </ListItem>
            
          })
      }
      
    </List>
  )
}

export default Todos;