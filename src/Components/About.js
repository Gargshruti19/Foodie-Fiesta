import UserClass from "./UserClass";
import React from "react";
import UserContext from "../Utils/UserContext";
class About extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	render() {
		return (
			<>
				<h1>About Us Page</h1>
				<div>
					<UserContext.Consumer>
						{({ loggedInUser }) => (
							<h1 className="font-bold">{loggedInUser}</h1>
						)}
					</UserContext.Consumer>
				</div>
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
