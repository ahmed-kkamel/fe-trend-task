import React, { useState } from "react";

interface AddTaskPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (title: string, description: string, status: string) => void;
}

const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("To Do");

    const handleSave = () => {
        if (title && description) {
            onSave(title, description, status);
            onClose(); // Close the popup after saving
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-lg font-bold mb-4 text-[#2B1F33]">Add New Task</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="title" className="text-sm font-medium text-[#2B1F33]">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md mt-1"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="text-sm font-medium text-[#2B1F33]"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-2 border border-gray-300 rounded-md mt-1"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="text-sm font-medium text-[#2B1F33]">
                            Status
                        </label>
                        <select
                            id="status"
                            className="w-full p-2 border border-gray-300 rounded-md mt-1"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </form>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-md text-[#2B1F33] hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-[#3B82F6] text-white rounded-md hover:bg-[#2563EB]"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskPopup;
