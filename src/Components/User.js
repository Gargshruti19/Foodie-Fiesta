import { useState } from "react";

const User = (props) => {
	const [count, setCount] = useState(0);
	return (
		<div className="user-card">
			<h1>Count - {count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Count inc
			</button>
			<h1>Name - {props.name}</h1>
			<h2>Location - Meerut</h2>
			<h3>Contact - @ShrutiG234</h3>
		</div>
	);
};
export default User;
