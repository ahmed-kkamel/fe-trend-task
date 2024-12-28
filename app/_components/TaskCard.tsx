import AddTaskPopup from "./AddTaskPopup";
import ConfirmationPopup from "./ConfirmationPopup";
import TaskItem from "./TaskItem";
import useTaskCard from "../_hooks/useTaskCard";
import { editTask } from "../_store/store";
import { columns } from "../_const/columns";
import { TaskCardProps } from "../_types/TaskCardProps";

const TaskCard: React.FC<TaskCardProps> = ({ column }) => {
    const {
        isEditing,
        editingTask,
        taskToDelete,
        isConfirmOpen,
        filteredTasks,
        setIsEditing,
        setIsConfirmOpen,
        handleDelete,
        handleEdit,
        handleMoveTask,
        confirmDelete,
        dispatch,
    } = useTaskCard(column.title);


    return (
        <div className="flex flex-col gap-4">
            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={handleEdit}
                    onDelete={confirmDelete}
                    onMoveTask={handleMoveTask}
                    columnTitle={column.title}
                    allColumns={columns.map((col) => col.title)}
                />
            ))}

            {isEditing && editingTask && (
                <AddTaskPopup
                    isOpen={isEditing}
                    onClose={() => setIsEditing(false)}
                    onSave={(title, description, status) => {
                        dispatch(editTask({ ...editingTask, title, description, status }));
                        setIsEditing(false);
                    }}
                />
            )}

            <ConfirmationPopup
                isOpen={isConfirmOpen}
                taskToDelete={taskToDelete}
                onConfirm={handleDelete}
                onCancel={() => setIsConfirmOpen(false)}
            />
        </div>
    );
};

export default TaskCard;
