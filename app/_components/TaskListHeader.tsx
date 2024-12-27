"use client";
import React, { useState, useCallback, useMemo } from "react";
import { addTask, RootState } from "../_store/store";
import AddTaskPopup from "./AddTaskPopup";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../_store/store";
import debounce from "../_utils/debounce";

const navItems = ["Tasks List", "Calendar", "Dashboard", "Progress", "Forms", "More"];

const TaskListHeader: React.FC = React.memo(() => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.tasks.searchTerm);

    const handleSearch = useCallback(
        debounce((value: string) => {
            dispatch(setSearchTerm(value));
        }, 300),
        [dispatch]
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
    };

    const handleSave = useCallback(
        (title: string, description: string, status: string) => {
            const newTask = { id: Date.now(), title, description, status };
            dispatch(addTask(newTask));
            setIsPopupOpen(false);
        },
        [dispatch]
    );

    const navLinks = useMemo(
        () =>
            navItems.map((item, index) => (
                <span
                    key={index}
                    className={`${item === "Tasks List"
                        ? "text-[#7A63FF] font-semibold underline cursor-pointer"
                        : "hover:text-[#374151] cursor-pointer"
                        }`}
                >
                    {item}
                </span>
            )),
        []
    );

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#FFFFFF] p-4 border-b border-[#E5E7EB] shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-[#2B1F33]">Task Boards</h1>
                    <button className="text-[#6B7280] hover:text-[#374151]">✎</button>
                </div>
                <div className="flex gap-4 text-sm text-[#6B7280]">{navLinks}</div>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <input
                    type="text"
                    defaultValue={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Search tasks..."
                    className="p-2 border rounded-md"
                />
                <button
                    className="p-2 bg-[#F3F4F6] rounded-md hover:bg-[#E5E7EB]"
                    onClick={() => setIsPopupOpen(true)}
                >
                    ➕
                </button>
                <AddTaskPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    onSave={handleSave}
                />
            </div>
        </div>
    );
});

export default TaskListHeader;
