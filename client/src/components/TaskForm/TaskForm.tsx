import { useState } from "react";
import type { FormEvent } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from "react-bootstrap";
import './TaskForm.css';


interface TaskFormProps {
    onCreate : (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({onCreate})=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState<{ title?: string; description?: string }>({});


    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        const newErrors: { title?: string; description?: string } = {};

        if (!title.trim()) {
            newErrors.title = "El título es obligatorio";
        } 

        if (description.length > 50) {
            newErrors.description = "La descripción no puede tener más de 50 caracteres";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        onCreate(title, description);
        setTitle('');
        setDescription('');
    }

return (
    <Container className="task-container d-flex flex-column align-items-center">
    <Form className="w-100" onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Form.Label column sm="12" className='text-center labels'>Titulo de la tarea</Form.Label>
         <Col sm="12">
            <Form.Control
                className="box"
                type="text" 
                name="task" 
                placeholder="Ingresa la tarea"
                value= {title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            {errors.title && <div className="text-danger small mt-1">{errors.title}</div>}

         </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 justify-content-center">
        <Form.Label column sm="12" className="text-center labels">Descripción</Form.Label>
        <Col sm="12">
            <Form.Control
                className="box"
                type="text"
                name= "description"
                placeholder="Ingrese una descripción" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as = "textarea"
                rows={2}
            />
            {errors.description && <div className="text-danger small mt-1">{errors.description}</div>}

         </Col>
      </Form.Group>
      <div className="text-center">
        <Button variant="light" className="mt-2" type="submit">Agregar</Button>
      </div>

    </Form>
    </Container>
);
};

export default TaskForm;