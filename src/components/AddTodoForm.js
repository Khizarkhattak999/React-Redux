import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
    const [item, setItem] = useState('')

    const dispatch = useDispatch()

    
    const inputhandler = (e) => {
        setItem(e.target.value)
    }
    
    const Addtodo = (e) => {
        e.preventDefault()
        
         dispatch ({type: 'savetodo', title: item})

    }

  return (
    <div>
      <div className="input">
        <TextField
          label="Type your Todo"
          variant="outlined"
          fullWidth
          id="fullWidth"
          onChange={inputhandler}
          value={item}
        />
      </div>
      <Button variant="contained" sx={{backgroundColor:'#FF5733', marginTop: 1, marginLeft: 54}} onClick={Addtodo}>Add</Button>

    </div>
  );
};

export default AddTodoForm;
