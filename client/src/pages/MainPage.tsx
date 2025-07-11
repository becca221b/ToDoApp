import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TasksList/TaskList";
import TaskFilter from "../components/TaskFilter/TaskFilter";
import type { Task } from "../types/Task";

const MainPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<string>("");

    const fetchTasks = async () =>{
        const res = await fetch('https://todoapp-uyig.onrender.com/api/tasks');
        if(filter === "completed") {
            const data = await res.json();
            setTasks(data.tasks.filter((task: Task) => task.completed));
            return;
        }else if(filter === "pending") {
            const data = await res.json();
            setTasks(data.tasks.filter((task: Task) => !task.completed));
            return;
        }
        const data = await res.json();
        setTasks(data.tasks);
    }

    useEffect(()=>{
        fetchTasks();
    }, [filter]);

    const createTask = async(title: string, description: string)=>{
        const res = await fetch('https://todoapp-uyig.onrender.com/api/tasks',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, description})
        });

        const data = await res.json();
        setTasks((prev :Task[])=>[...prev, data.task]);
    }

    const toggleTask = async (id: string, completed: boolean) => {
        await fetch(`https://todoapp-uyig.onrender.com/api/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !completed })
        });
        fetchTasks();
    }

    const deleteTask = async (id: string) => {
        await fetch(`https://todoapp-uyig.onrender.com/api/tasks/${id}`, {
            method: 'DELETE'
        });
        setTasks((prev) => prev.filter((task) => task._id !== id));
    };



    return(
        <div className="container">
            <h1 className="text-center mb-4">App de Tareas</h1>
            <TaskForm onCreate={createTask}/>
            <TaskFilter filter={filter} onChange={setFilter} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
    );
};
export default MainPage;