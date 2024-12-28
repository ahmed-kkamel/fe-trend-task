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
        <div className="flex gap-3 items-center" role="region" aria-labelledby={`${column.title}-header`}>
            <h2
                id={`${column.title}-header`}
                className="text-xl font-bold"
                tabIndex={0}
            >
                {column.title}
            </h2>
            <span
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ backgroundColor: column.bgColor, color: column.textColor }}
                aria-label={`Task count for ${column.title}`}
            >
                {taskCount}
            </span>
        </div>
    );
};

export default TaskBoardHeader;
