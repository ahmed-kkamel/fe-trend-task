import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, RootState, setSearchTerm, setTasks } from "../_store/store";
import { v4 as uuidv4 } from "uuid";
import { navItems } from "../_const/navItems";
import NavItem from "./NavItem";
import SearchInput from "./SearchInput";
import AddTaskButton from "./AddTaskButton";
import AddTaskPopup from "./AddTaskPopup";
import { getFromLocalStorage, saveToLocalStorage } from "../_utils/localStorageUtils";

const TaskListHeader: React.FC = React.memo(() => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const dispatch = useDispatch();
    const { searchTerm, tasks } = useSelector((state: RootState) => state.tasks);

    useEffect(() => {
        const savedTasks = getFromLocalStorage("tasks");
        const savedSearchTerm = getFromLocalStorage("searchTerm");

        if (savedTasks) {
            dispatch(setTasks(savedTasks));
        }
        if (savedSearchTerm) {
            dispatch(setSearchTerm(savedSearchTerm));
        }
    }, [dispatch]);

    useEffect(() => {
        saveToLocalStorage("tasks", tasks);
    }, [tasks]);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            dispatch(setSearchTerm(value));
            saveToLocalStorage("searchTerm", value);
        },
        [dispatch]
    );

    const handleSave = useCallback(
        (title: string, description: string, status: string) => {
            const newTask = { id: uuidv4(), title, description, status };
            dispatch(addTask(newTask));
            setIsPopupOpen(false);
        },
        [dispatch]
    );

    const navLinks = useMemo(
        () =>
            navItems.map((item, index) => <NavItem key={index} item={item} />),
        []
    );

    return (
        <header className="flex flex-col lg:flex-row gap-4 justify-between items-center bg-white p-4 border-b border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <div className="flex items-center gap-2">
                    <h2 className="text-base lg:text-2xl font-bold text-[#2B1F33]">Task Boards</h2>
                    <button
                        aria-label="Edit"
                        className="text-gray-600 hover:text-gray-700 focus:outline-none"
                    >
                        ✎
                    </button>
                </div>
                <nav aria-label="Task Navigation" className="flex gap-4 text-xs md:text-sm text-gray-600">
                    {navLinks}
                </nav>
            </div>
            <div className="flex items-center gap-4">
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

TaskListHeader.displayName = "TaskListHeader";

export default TaskListHeader;
