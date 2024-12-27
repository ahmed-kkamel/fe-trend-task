"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../_store/store";
import AddTaskPopup from "./AddTaskPopup";

const navItems = ["Tasks List", "Calendar", "Dashboard", "Progress", "Forms", "More"];

const TaskListHeader: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSave = (title: string, description: string, status: string) => {
        const newTask = { id: Date.now(), title, description, status };
        dispatch(addTask(newTask));
        setIsPopupOpen(false);
    };
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#FFFFFF] p-4 border-b border-[#E5E7EB] shadow-sm">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-[#2B1F33]">Task Boards</h1>
                    <button className="text-[#6B7280] hover:text-[#374151]">
                        ✎ {/* Edit icon */}
                    </button>
                </div>
                <div className="flex gap-4 text-sm text-[#6B7280]">
                    {navItems.map((item, index) => (
                        <span
                            key={index}
                            className={`${item === "Tasks List" ? "text-[#7A63FF] font-semibold underline cursor-pointer" : "hover:text-[#374151] cursor-pointer"
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                {/* Avatar Section */}
                <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar 1"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar 2"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar 3"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                    </div>
                    <span className="text-sm text-[#6B7280] font-medium">+5</span>
                </div>

                {/* Add Button */}
                <button className="p-2 bg-[#F3F4F6] rounded-md hover:bg-[#E5E7EB]" onClick={() => setIsPopupOpen(true)}
                >
                    ➕ {/* Add icon */}
                </button>
                <AddTaskPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSave={handleSave} />

            </div>
        </div>
    );
};

export default TaskListHeader;
