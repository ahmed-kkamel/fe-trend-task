"use client";
import React, { useState, useCallback, useMemo } from "react";
import { addTask, RootState } from "../_store/store";
import AddTaskPopup from "./AddTaskPopup";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../_store/store";
import { navItems } from "../_const/navItems";
import NavItem from "./NavItem";
import SearchInput from "./SearchInput";
import AddTaskButton from "./AddTaskButton";


const TaskListHeader: React.FC = React.memo(() => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.tasks.searchTerm);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(setSearchTerm(e.target.value));
        },
        [dispatch]
    );

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
                <NavItem key={index} item={item} />
            )),
        []
    );

    return (
        <header className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-white p-4 border-b border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-[#2B1F33]">Task Boards</h2>
                    <button
                        aria-label="Edit"
                        className="text-gray-600 hover:text-gray-700 focus:outline-none"
                    >
                        ✎
                    </button>
                </div>
                <nav aria-label="Task Navigation" className="flex gap-4 text-sm text-gray-600">
                    {navLinks}
                </nav>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <SearchInput value={searchTerm} onChange={handleSearch} />
                <AddTaskButton onClick={() => setIsPopupOpen(true)} />
                <AddTaskPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    onSave={handleSave}
                />
            </div>
        </header>
    );
});

export default TaskListHeader;