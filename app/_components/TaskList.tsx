import TaskListHeader from "./TaskListHeader"
import TaskBoard from "./TaskBoard"

const TaskList = () => {
    return (
        <div className="md:w-[calc(100%-25%)] lg:w-[calc(100%-20%)] md:ml-auto ">
            <TaskListHeader />
            <TaskBoard />
        </div>
    )
}

export default TaskList