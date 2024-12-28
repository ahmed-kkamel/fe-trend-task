import React from 'react';

const AddTaskButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
        aria-label="Add new task"
        onClick={onClick}
        className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
        ➕
    </button>
);

export default AddTaskButton;