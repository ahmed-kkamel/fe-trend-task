import React, { RefObject } from 'react';

type DropdownMenuProps = {

    dropdownRef: RefObject<HTMLDivElement | null>;

    dropdownOptions: string[];

    handleMoveTask: (option: string) => void;

};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ dropdownRef, dropdownOptions, handleMoveTask }) => {
    return (
        <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 min-w-[8rem]"
        >
            {dropdownOptions.map((option) => (
                <button
                    key={option}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleMoveTask(option)}
                >
                    Mark as {option}
                </button>
            ))}
        </div>
    );
};

export default DropdownMenu;