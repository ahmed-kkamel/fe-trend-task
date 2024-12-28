import React, { useState, useCallback } from "react";
import { AddTaskPopupProps } from "../_types/AddTaskPopupProps";

const AddTaskPopup: React.FC<AddTaskPopupProps> = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "To Do",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({
        title: "",
        description: "",
    });

    const resetForm = useCallback(() => {
        setFormData({
            title: "",
            description: "",
            status: "To Do",
        });
        setErrors({
            title: "",
            description: "",
        });
    }, []);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { id, value } = e.target;
            setFormData((prev) => ({
                ...prev,
                [id]: value,
            }));

            if (value && errors[id]) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [id]: "",
                }));
            }
        },
        [errors]
    );

    const handleSave = useCallback(() => {
        const newErrors: any = {};
        if (!formData.title) newErrors.title = "Title is required.";
        if (!formData.description) newErrors.description = "Description is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSave(formData.title, formData.description, formData.status);
        resetForm();
        onClose();
    }, [formData, onSave, resetForm, onClose]);

    const handleClose = useCallback(() => {
        resetForm();
        onClose();
    }, [resetForm, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#606C80] bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
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
                            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md mt-1`}
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        {errors.title && <small className="text-red-500">{errors.title}</small>}
                    </div>
                    <div>
                        <label htmlFor="description" className="text-sm font-medium text-[#2B1F33]">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md mt-1`}
                            rows={3}
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        {errors.description && <small className="text-red-500">{errors.description}</small>}
                    </div>
                    <div>
                        <label htmlFor="status" className="text-sm font-medium text-[#2B1F33]">
                            Status
                        </label>
                        <select
                            id="status"
                            className="w-full p-2 border border-gray-300 rounded-md mt-1"
                            value={formData.status}
                            onChange={handleInputChange}
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
                        onClick={handleClose}
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
