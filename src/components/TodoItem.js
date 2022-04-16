import React from "react";
import { Button, Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";


const TodoItem = ({id, title, completed}) => {

    const dispatch = useDispatch()

    const handleComplete = () => {
      dispatch({type: 'togglecomplete', payload: {id:id, completed: !completed}})
    }

    const handleDelete = () => {
      dispatch({type: 'deletebtn', payload: id})
    }

    const handleChange = (e) => {
        e.target.value()
    }

  return (
      <>
    <div className="inlinee">
      <Checkbox
      checked={completed}
      onClick={handleComplete}
      className="check"
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <h5>{title}</h5>
    <div className="icon">
    <Button onClick={handleDelete}><DeleteIcon sx={{ color: 'red' }}/> </Button>
    <br></br>
    </div>
    </div>
    </>
  );
};

export default TodoItem;
