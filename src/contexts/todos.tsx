import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
  children : ReactNode
}

export type UUID = ReturnType<typeof crypto.randomUUID>;

export type Todo = {
  id:UUID;
  task:string;
  done: boolean;
  createdAt:Date;
}

export type TodosContext = {
  todos:Todo[];
  handleAddToDo:(task:string) => void;
  toggleTodoAsCompleted:(id:UUID) => void;
  handleDeleteTodo:(id:UUID) => void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children}:TodosProviderProps) => {

  const[todos,setTodo] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (error) {
      return []
    }
  })

  const handleAddToDo = (task:string) =>{
    setTodo((prev) =>{
      const newTodos:Todo[] = [
        {
          id:crypto.randomUUID(),
          task:task,
          done:false,
          createdAt:new Date()
        },
        ...prev
      ]
      //console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    })
  }

  const toggleTodoAsCompleted = (id:UUID) => {
    setTodo((prev) => {
      let newTodos = prev.map((todo) => {
        if(todo.id === id){
          return {...todo,done:!todo.done}
        }
        return todo;
      })
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    })
  }

  const handleDeleteTodo =(id:UUID) => {
    setTodo((prev)=>{
      const newTodos = prev.filter((filterTodo) => filterTodo.id != id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    })
  }

  return <todosContext.Provider value={{todos,handleAddToDo,toggleTodoAsCompleted,handleDeleteTodo}}>
            {children}
        </todosContext.Provider>
}

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if(!todosConsumer){
    throw new Error('useTodos used outside of provider');
  }
  return todosConsumer;
}
