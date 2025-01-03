import React from "react";
import ActionButton from "./ActionButton";
import TaskItemHeader from "./TaskItemHeader";
import useTaskItem from "../_hooks/useTaskItem";
import { TaskItemProps } from "../_types/TaskItemProps";

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onEdit,
    onDelete,
    onMoveTask,
    columnTitle,
    allColumns,
}) => {
    const {
        isDropdownOpen,
        dropdownRef,
        toggleDropdown,
        dropdownOptions,
        handleMoveTask,
    } = useTaskItem(columnTitle, allColumns, onMoveTask, task);

    return (
        <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow flex flex-col gap-4">
            <TaskItemHeader
                taskTitle={task.title}
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                dropdownRef={dropdownRef}
                dropdownOptions={dropdownOptions}
                handleMoveTask={handleMoveTask}
            />
            <p className="text-gray-600 break-words">{task.description}</p>
            <div className="flex justify-between gap-2">
                <ActionButton onClick={() => onEdit(task)} label="Edit" color="blue" />
                <ActionButton onClick={() => onDelete(task)} label="Delete" color="red" />
            </div>
        </div>
    );
};

export default TaskItem;
