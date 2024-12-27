import React from "react";
import TaskBoardHeader from "./TaskBoardHeader";
import TaskCard from "./TaskCard";
import { Task } from '../_types/task';
import { columns } from '../_const/columns';



// Mock tasks data
const tasks: Task[] = [
  { id: 1, title: "Title of the task", description: "#code of task ", status: "Backlog" },
  { id: 2, title: "Title of the task", description: "#code of task", status: "Backlog" },
  { id: 3, title: "Title of the task", description: "#code of task", status: "To Do" },
  { id: 4, title: "Model Answer", description: "#002", status: "To Do" },
  { id: 5, title: "Title of the task", description: "#code of task", status: "In Progress" },
  { id: 6, title: "Model Answer", description: "#code of task", status: "In Progress" },
  { id: 7, title: "Title of the task", description: "#code of task", status: "Done" },
  { id: 8, title: "Product Design", description: "Figma, Sketch", status: "Done" },
];



const TaskBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {columns.map((column) => (
        <div key={column.title} className="flex flex-col p-4 rounded-lg gap-4">
          <TaskBoardHeader column={column} tasks={tasks} />
          <TaskCard tasks={tasks} column={column} />
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
