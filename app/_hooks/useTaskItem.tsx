import { useState, useRef, useEffect, useMemo } from "react";
import { Task } from "../_types/task";

const useTaskItem = (
    columnTitle: string,
    allColumns: string[],
    onMoveTask: (task: Task, newStatus: string) => void,
    task: Task
) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const dropdownOptions = useMemo(
        () => allColumns.filter((column) => column !== columnTitle),
        [allColumns, columnTitle]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleMoveTask = (newStatus: string) => {
        onMoveTask(task, newStatus);
        setIsDropdownOpen(false);
    };

    return {
        isDropdownOpen,
        dropdownRef,
        toggleDropdown,
        dropdownOptions,
        handleMoveTask,
    };
};

export default useTaskItem;
