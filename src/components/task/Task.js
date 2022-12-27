import CloseIcon from '@mui/icons-material/Close';

const Task = ({ task, onDelete, onToggle }) => {


  return (
    <div
      className={`task ${task.complete && 'complete'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <CloseIcon 
          style={{ color: 'red' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task