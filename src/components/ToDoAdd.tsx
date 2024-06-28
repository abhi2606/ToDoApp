import { FormEvent, useState } from "react";
import { useTodos } from "../contexts/todos";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const AddToDo = () => {

  const[todo,setTodo] = useState("");
  const{handleAddToDo} = useTodos();
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddToDo(todo);
    setTodo("");
  }

  return (
    
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={10}>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Task" id="fullWidth" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Button style={{marginTop:10}} type="submit" variant="contained" endIcon={<AddIcon/>}>Add</Button>
          </Grid>
        </Grid>
    </form>

  )
}

export default AddToDo;