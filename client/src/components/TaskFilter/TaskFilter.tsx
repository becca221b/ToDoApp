import React from 'react';
import './TaskFilter.css';


type Props = {
    filter: string;
    onChange: (filter: string) => void;
};

const TaskFilter: React.FC<Props> = ({ filter, onChange }) => {
    return (
        <div className="task-filter">
            <label>
                <input
                className='me-1'
                type="checkbox"
                checked={filter === "completed"}
                onChange={() => onChange(filter === "completed" ? "" : "completed")}
                />
                Completadas
            </label>

            <label>
                <input
                className='me-1'
                type="checkbox"
                checked={filter === "pending"}
                onChange={() => onChange(filter === "pending" ? "" : "pending")}
                />
                Pendientes
            </label>
        </div>
    );
};

export default TaskFilter;