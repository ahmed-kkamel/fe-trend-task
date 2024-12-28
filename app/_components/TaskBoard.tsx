import React from "react";
import TaskBoardHeader from "./TaskBoardHeader";
import TaskCard from "./TaskCard";
import { columns } from '../_const/columns';

const TaskBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
      {columns.map((column) => (
        <div key={column.title} className="flex flex-col p-2 rounded-lg gap-4">
          <TaskBoardHeader column={column} />
          <TaskCard column={column} />
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
