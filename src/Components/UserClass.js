import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: "Dummy",
				avatar_url: "https://dummy.png",
				followers: 90,
				location: "default",
				login: "@dummy",
			},
		};
		// console.log("constructor");
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/Gargshruti19");
		const json = await data.json();

		this.setState({
			userInfo: json,
		});

		// console.log(json);
		// console.log("mount");
	}

	componentDidUpdate() {
		// console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		//this fxn is called just before our fxn unmounts
		// console.log("componentWillUnmount");
	}
	render() {
		const { name, location, avatar_url, followers, login } =
			this.state.userInfo;
		// console.log("render");
		return (
			<>
				<h1>My Github Account Info</h1>
				<div className="user-card">
					<h1>Name - {name}</h1>
					<img src={avatar_url}></img>
					<h2>Location - {location}</h2>
					<h3>Followers - {followers}</h3>
					<h4>Login Id : {login}</h4>
				</div>
			</>
		);
	}
}

export default UserClass;
