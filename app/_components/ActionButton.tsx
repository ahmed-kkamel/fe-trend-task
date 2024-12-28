import React from "react";

type ActionButtonProps = {
    onClick: () => void;
    label: string;
    color: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, color }) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 text-${color}-600 font-semibold rounded-lg shadow-sm border hover:bg-${color}-800 focus:outline-none `}
            aria-label={label}
        >
            {label}
        </button >
    );
};

export default ActionButton;
