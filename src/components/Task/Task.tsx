import React, { useContext } from 'react';
import { IFilterItem, ITask } from '../../models/models';
import Badge from '../Badge/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { AppContext } from '../../context/appContext';

interface ITaskProps {
    task: ITask
}

function Task({task}: ITaskProps) {

    const { deleteTask, completeTask,  FILTER_MAP } = useContext(AppContext)

    const getBadgeColor = () => {
        const filterItem = FILTER_MAP.find((item: IFilterItem) => item.filterName === task.badge)
        return filterItem?.filterColor
    }

    const textDecoration = task.isComplete? {textDecoration: 'line-through', color: 'rgb(148 163 184)'} : {textDecoration: 'none'}

    return (
        <div className="Task relative flex my-2 py-1 items-center group">
            <input
                type="checkbox" name="isComplete"
                id={task.id}
                onChange={() => completeTask(task)}
                checked={task.isComplete}
                className="h-10 w-10 rounded-[15px] border-4 shrink-0"
            />
            <label 
              htmlFor={task.id}
              className="TaskDescription text-3xl ml-3 w-full wrp"
              style={textDecoration}
              >
                {task.description}
            </label>
            {task.badge && <Badge badgeName={task.badge} badgeColor={getBadgeColor()}/>}
            <button
                className='invisible group-hover:visible'
                onClick={() => deleteTask(task)}
            >
                <FontAwesomeIcon icon={faCircleXmark} size="2x"/>
            </button>
        </div>
    );
}

export default Task;