import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg'

import './Task.css'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
	return(
		<>
			<div 
				className="task-container"
				style={task.completed ? {borderLeft: "6px solid chartreuse", textDecoration: "line-through"} : {}}
			>
				<div 
					className="task-title"
					onClick={() => handleTaskClick(task.id)}
				>
					{task.title}
				</div>
				<div>
					<button onClick={() => {}} className="see-task-details-button">
						<CgInfo />
					</button>
					<button onClick={() => handleTaskDeletion(task.id)} className="remove-task-button">
						<CgClose />
					</button>
				</div>
			</div>
		</>
	)
}

export default Task;