import React from 'react';
import { Task } from '../_types/task';


type Column = {
    title: string;
    bgColor: string;
    textColor: string;
};

type TaskBoardHeaderProps = {
    column: Column;
    tasks: Task[];
};

const TaskBoardHeader: React.FC<TaskBoardHeaderProps> = ({ column, tasks }) => {
    const taskCount = tasks.filter(task => task.status === column.title).length;

    return (
        <div className="flex gap-3 items-center">
            <h2 className="text-xl font-bold">{column.title}</h2>
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: column.bgColor, color: column.textColor }}>{taskCount}</span>
        </div>
    );
};

export default TaskBoardHeader;