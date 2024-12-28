import React, { useState, useCallback, useEffect } from "react";
import { AddTaskPopupProps } from "../_types/AddTaskPopupProps";
import { Task } from "../_types/task";

type Props = AddTaskPopupProps & {
    taskToEdit?: Task | null;
};

const AddTaskPopup: React.FC<Props> = ({ isOpen, onClose, onSave, taskToEdit }) => {
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
        const newErrors: { [key: string]: string } = {};
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

    useEffect(() => {
        if (taskToEdit) {
            setFormData({
                title: taskToEdit.title,
                description: taskToEdit.description,
                status: taskToEdit.status,
            });
        } else {
            resetForm();
        }
    }, [taskToEdit, resetForm]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#606C80] bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
                <h2 className="text-base md:text-2xl font-semibold mb-6 text-gray-800">
                    {taskToEdit ? "Edit Task" : "Create a New Task"}
                </h2>
                <form className="flex flex-col gap-6">
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-xs md:text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            className={`w-full mt-2 p-3 border ${errors.title ? "border-red-500" : "border-gray-300"
                                } rounded-lg shadow-sm focus:outline-none`}
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        {errors.title && (
                            <small className="text-red-500 text-xs">{errors.title}</small>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-xs md:text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            className={`w-full mt-2 p-3 border ${errors.description ? "border-red-500" : "border-gray-300"
                                } rounded-lg shadow-sm focus:outline-none`}
                            rows={4}
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        {errors.description && (
                            <small className="text-red-500 text-xs">{errors.description}</small>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="status"
                            className="block text-xs md:text-sm font-medium text-gray-700"
                        >
                            Status
                        </label>
                        <select
                            id="status"
                            className="w-full mt-2 p-3 text-xs md:text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none px-2"
                            value={formData.status}
                            onChange={handleInputChange}
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </form>
                <div className="flex justify-end gap-4 mt-8">
                    <button
                        className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                        onClick={handleSave}
                    >
                        {taskToEdit ? "Save Changes" : "Create Task"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskPopup;
