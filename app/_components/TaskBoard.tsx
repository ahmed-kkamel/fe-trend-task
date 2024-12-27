import React from "react";
import TaskBoardHeader from "./TaskBoardHeader";
import TaskCard from "./TaskCard";
import { columns } from '../_const/columns';

const TaskBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {columns.map((column) => (
        <div key={column.title} className="flex flex-col p-4 rounded-lg gap-4">
          <TaskBoardHeader column={column} />
          <TaskCard column={column} />
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
