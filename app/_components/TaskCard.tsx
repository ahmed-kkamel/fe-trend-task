import React from 'react';
import { Task } from '../_types/task';

interface TaskCardProps {
    tasks: Task[];
    column: {
        title: string;
    };
}

const TaskCard: React.FC<TaskCardProps> = ({ tasks, column }) => {
    return (
        <div className="flex flex-col gap-4">
            {tasks
                .filter((task) => task.status === column.title)
                .map((task) => (
                    <div
                        key={task.id}
                        className="flex flex-col bg-white p-4 rounded-lg shadow hover:shadow-md border border-[#E5E7EB]"
                    >
                        <h3 className="text-sm font-medium text-[#2B1F33]">
                            {task.title}
                        </h3>
                        <p className="text-xs text-[#6B7280]">{task.description}</p>
                    </div>
                ))}
            <button className="flex justify-center items-center bg-[#F3F4F6] text-[#6B7280] p-2 rounded-md hover:bg-[#E5E7EB]">
                + Add Task
            </button>
        </div>
    );
};

export default TaskCard;