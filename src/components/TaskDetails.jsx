import React from "react";

import "./TaskDetails.css"
import Button from "./Button";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
	const params = useParams();
	console.log(params)
	return(
		<>
		<div className="back-button-container">
			<Button>Voltar</Button>
		</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a vero modi velit quibusdam ea?</p>
			</div>
		</>
	)
}

export default TaskDetails;