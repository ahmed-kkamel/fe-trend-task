import React from 'react';
import Image from 'next/image';
import DropdownMenu from './DropdownMenu';
import { TaskItemHeaderProps } from '../_types/TaskItemHeaderProps';

const TaskItemHeader: React.FC<TaskItemHeaderProps> = ({
    taskTitle,
    isDropdownOpen,
    toggleDropdown,
    dropdownRef,
    dropdownOptions,
    handleMoveTask,
}) => {
    return (
        <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-800">{taskTitle}</h3>
            <div className="relative">
                <Image
                    src="/more.svg"
                    width={24}
                    height={24}
                    alt="More options"
                    className="cursor-pointer"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                />
                {isDropdownOpen && (
                    <DropdownMenu
                        dropdownRef={dropdownRef}
                        dropdownOptions={dropdownOptions}
                        handleMoveTask={handleMoveTask}
                    />
                )}
            </div>
        </div>
    );
};

export default TaskItemHeader;