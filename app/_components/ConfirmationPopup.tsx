import React from 'react';

type ConfirmationPopupProps = {
    isOpen: boolean;
    taskToDelete: { title: string } | null;
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ isOpen, taskToDelete, onConfirm, onCancel }) => {
    if (!isOpen || !taskToDelete) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md">
                <p>
                    Are you sure you want to delete the task: <strong>{taskToDelete.title}</strong>?
                </p>
                <div className="flex gap-2">
                    <button onClick={onConfirm} className="text-red-500">
                        Yes
                    </button>
                    <button onClick={onCancel} className="text-gray-500">
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;