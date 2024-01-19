import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	render() {
		return (
			<>
				<UserClass location="meerut (class)" />
				
			</>
		);
	}
}

// const About = () => {
// 	return (
// 		<>
// 			<User name="shruti (function)" />
// 			<UserClass location="meerut (class)" />
// 		</>
// 	);
// };

export default About;
