import type {Task} from '../../types/Task';
import TaskItem from '../TaskItem/TaskItem';

import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
    return(
        <div className="todos">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
        </div>
    );
};

export default TaskList;