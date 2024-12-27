import React from 'react';
import { Task } from '../_types/task';

type TaskItemProps = {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (task: Task) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    return (
        <div key={task.id} className="p-4 bg-white shadow rounded-md">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="flex gap-2">
                <button onClick={() => onEdit(task)} className="text-blue-500">
                    Edit
                </button>
                <button onClick={() => onDelete(task)} className="text-red-500">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;