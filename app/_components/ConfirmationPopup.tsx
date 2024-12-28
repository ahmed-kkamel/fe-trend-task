import { ConfirmationPopupProps } from '../_types/ConfirmationPopupProps';


const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ isOpen, taskToDelete, onConfirm, onCancel }) => {
    if (!isOpen || !taskToDelete) return null;

    return (
        <div className="fixed inset-0 bg-[#606C80] bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <p className="text-lg text-gray-800">
                    Are you sure you want to delete the task: <span className="font-bold">{taskToDelete.title}</span>?
                </p>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;