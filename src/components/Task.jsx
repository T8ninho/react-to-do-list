import React from "react";
import './Task.css'

const Task = ({task}) => {
	return(
		<>
			<div className="task-container">
				<h1>{task.title}</h1>
				<button>{task.completed ? '💚' : '💔'}</button>
			</div>
		</>
	)
}

export default Task;