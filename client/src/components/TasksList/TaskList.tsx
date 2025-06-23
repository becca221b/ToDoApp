import type {Task} from '../../types/Task';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
    return(
        <div className="todos">
            {(tasks.length > 0) &&
            tasks.map((task) => (
                <div className="todo">
                    <p style={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}>{task.title}</p>
                    
                
                    <div className="mutations">
                    
                        <button
                            className="todo_status"
                            onClick={() => onToggle(task._id, task.completed)}
                        >
                            {task.completed ?  "☑" : "☐"}
                        </button>
                    </div>

                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(task._id)}>
                        🗑
                    </button>
                </div>
                
            ))}
        </div>
    )
}

export default TaskList;