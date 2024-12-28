import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../_types/task';
import { RootState } from '../_store/store';
import { Column } from '../_types/column';

type TaskBoardHeaderProps = {
    column: Column;
};

const TaskBoardHeader: React.FC<TaskBoardHeaderProps> = ({ column }) => {
    const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);
    const taskCount = tasks.filter(task => task.status === column.title).length;

    return (
        <div
            className="flex gap-3 items-center p-3 rounded-lg bg-gray-100 shadow-sm"
            role="region"
            aria-labelledby={`${column.title}-header`}
            aria-live="polite"
        >
            <h2
                id={`${column.title}-header`}
                className="text-xl font-semibold text-gray-800"
                tabIndex={0}
            >
                {column.title}
            </h2>
            <span
                className="text-xs px-2.5 font-semibold py-1 rounded-full"
                style={{ backgroundColor: column.bgColor, color: column.textColor }}
                aria-label={`Task count for ${column.title}`}
                role="status"
            >
                {taskCount}
            </span>
        </div>
    );
};

export default TaskBoardHeader;
