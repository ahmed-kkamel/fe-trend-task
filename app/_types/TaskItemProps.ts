import { Task } from "../_types/task";

export type TaskItemProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onMoveTask: (task: Task, newStatus: string) => void;
  columnTitle: string;
  allColumns: string[];
};
