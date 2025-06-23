import { useState } from "react";
import type { FormEvent } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";
import './TaskForm.css';


interface TaskFormProps {
    onCreate : (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({onCreate})=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        if (!title.trim()) return;

        onCreate(title, description);
        setTitle('');
        setDescription('');
    }

return (
    <form action="" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label column sm="4" className='labels'>Titulo de la tarea</Form.Label>
         <Col>
            <Form.Control
                className="box"
                type="text" 
                name="task" 
                placeholder="Ingresa la tarea"
                value= {title}
                onChange={(e)=>setTitle(e.target.value)}
            />
         </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4" className="d-flex align-items-center labels">Descripción</Form.Label>
        <Col sm="4">
            <Form.Control
                className="box"
                type="text"
                name= "description"
                placeholder="Ingrese una descripción" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as = "textarea"
            />
         </Col>
      </Form.Group>
      
      <Button className="mt-4" type="submit">Agregar</Button>

    </form>
);
};

export default TaskForm;