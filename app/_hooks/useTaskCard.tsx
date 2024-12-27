import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, deleteTask, editTask } from "../_store/store";
import { Task } from "../_types/task";

const useTaskCard = (columnTitle: string) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const dispatch = useDispatch();

    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const filteredTasks = useMemo(
        () => tasks.filter((task) => task.status === columnTitle),
        [tasks, columnTitle]
    );

    const handleDelete = () => {
        if (taskToDelete) {
            dispatch(deleteTask(taskToDelete.id));
            setIsConfirmOpen(false);
            setTaskToDelete(null);
        }
    };

    const handleEdit = (task: Task) => {
        setEditingTask(task);
        setIsEditing(true);
    };

    const confirmDelete = (task: Task) => {
        setTaskToDelete(task);
        setIsConfirmOpen(true);
    };
    return {
        isEditing,
        editingTask,
        taskToDelete,
        isConfirmOpen,
        filteredTasks,
        setIsEditing,
        setEditingTask,
        setIsConfirmOpen,
        handleDelete,
        handleEdit,
        confirmDelete,
        dispatch,
    };
};

export default useTaskCard;