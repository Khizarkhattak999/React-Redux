import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTask } from "../redux/action/action";
const AddTodoForm = () => {
    const [item, setItem] = useState('')

    const dispatch = useDispatch()

    
    const inputhandler = (e) => {
        setItem(e.target.value)
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
      <Button variant="contained" sx={{backgroundColor:'#FF5733', marginTop: 1, marginLeft: 54}} onClick={()=>dispatch(setTask({id:Date.now(),title:item}))}>Add</Button>

    </div>
  );
};

export default AddTodoForm;
