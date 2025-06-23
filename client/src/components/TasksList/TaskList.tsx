import type {Task} from '../../types/Task';
import { Card, Row, Col, Button } from 'react-bootstrap';
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
                <Card key={task._id} className="mb-3 shadow-sm">
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={8}>
                  <Card.Title
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                      cursor: 'pointer',
                      marginBottom: 0
                    }}
                    onClick={() => onToggle(task._id, task.completed)}
                  >
                    {task.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {task.description}
                  </Card.Text>
                </Col>

                <Col xs={4} className="text-end">
                  <Button
                    variant={task.completed ? 'success' : 'outline-secondary'}
                    size="sm"
                    className="me-2"
                    onClick={() => onToggle(task._id, task.completed)}
                  >
                    {task.completed ? '☑' : '☐'}
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(task._id)}
                  >
                    🗑
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
                
          ))}
      </div>
    )
}

export default TaskList;