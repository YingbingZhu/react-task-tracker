import { FaTimes } from 'react-icons/fa'

//  {' '} ensures a space is added between the task text and the icon.
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
        className={`task ${task.reminder && 'reminder'}`} // else ''
        onDoubleClick={() => onToggle(task.id)}
    >
        <h3>       
            {task.text}{' '} 
            <FaTimes
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(task.id)} // onDelete(task.id) without the arrow function would call onDelete immediately when the component renders, rather than waiting for the click event.
            />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
