import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // if no text display alert
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day });
      setText("");
      setDay(""); 
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <TextField
          type="text"
          placeholder="Add Task"
          value={text}
          sx={{ width: 440 }}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <TextField
          id="day"
          type="date"
          sx={{ width: 440 }}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <Button 
      type="submit" 
      value="Save Task" 
      variant='contained'>
        Submit</Button>
    </form>
  );
};

export default AddTask;
