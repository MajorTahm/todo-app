import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import Task from '../Task/Task';

function TasksList() {

    const { tasks, filter } = useContext(AppContext)

    // MAP TASK LIST DEPENDING ON FILTER CURRENT STATE
    // IF IT DOESNT MATCH HARDCODED VALUES MAP USING CURRENT CUSTOM CATEGORY COMPARING ITS NAME WITH VALUE OF TASK.BADGE
    function sendHelp() {
        if (filter === "Active") return (tasks.filter(task => !task.isComplete)).map(task => (
            <Task key={task.id} task={task} />
          ))
        if (filter === "Completed") return (tasks.filter(task => task.isComplete)).map(task => (
            <Task key={task.id} task={task} />
          ))
        if (filter === "All Tasks") return (tasks.map(task => (
            <Task key={task.id} task={task} />
        )))
        return (tasks.filter(task => (task.badge ?? false) === filter)).map(task => (
          <Task key={task.id} task={task} />))
    }

    const TasksList = sendHelp()

    return (
        <div className="TaskList flex flex-col mt-14">
            {TasksList}          
            {tasks.length === 0 && 
            <p
              className=" text-center font-semibold text-2xl text-slate-400"
            >
              Come add a task
            </p>
            }
            {(TasksList.length === 0 && tasks.length !== 0) &&
            <p
            className=" text-center font-semibold text-2xl text-slate-400"
            >
            No {filter} tasks
            </p>
            }
        </div>
    );
}

export default TasksList;