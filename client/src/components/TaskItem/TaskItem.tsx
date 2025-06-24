import { Card, Button } from 'react-bootstrap';
import type { Task } from '../../types/Task';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
    return(
        <Card className="task-card">
            <div className="task-horizontal">
                <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                    {task.title}
                </span>

                <div className="task-buttons">
                    <Button
                        variant="dark"
                        size="sm"
                        className={`icon-btn d-flex align-items-center ${task.completed ? 'check-green' : ''}`}
                        onClick={() => onToggle(task._id, task.completed)}
                    >
                        {task.completed ? '☑' : '☐'}
                    </Button>

                    <Button
                        variant="dark"
                        size="sm"
                        className="icon-btn d-flex align-items-center"
                        onClick={() => onDelete(task._id)}
                        >
                        🗑
                    </Button>
                </div>
                    </div>
        </Card>
    );
};
export default TaskItem;