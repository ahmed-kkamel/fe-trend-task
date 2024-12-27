import React from 'react';

type ActionButtonProps = {
    onClick: () => void;
    label: string;
    color: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, color }) => {
    return (
        <button onClick={onClick} className={`text-${color}-500 hover:underline`}>
            {label}
        </button>
    );
};

export default ActionButton;