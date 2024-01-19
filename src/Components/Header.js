import { useState } from "react";
import logoImg from "../../assets/logo.png";

import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Title = () => {
	return (
		<div className="title">
			<img src={logoImg}></img>
		</div>
	);
};

const Header = () => {
	const [logBtn, setLogBtn] = useState("Log In");
	const onlineStatus = useOnlineStatus();
	return (
		<div className="header">
			<Title />

			<ul className="nav-items">
				<li>Online status :{onlineStatus ? "✅" : "🔴"}</li>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/contact">
					<li>Contact</li>
				</Link>
				<Link>
					<li>Cart</li>
				</Link>

				<button
					className="log-btn"
					onClick={() => {
						if (logBtn === "Log In") {
							setLogBtn("Log Out");
						} else {
							setLogBtn("Log In");
						}
					}}
				>
					{logBtn}
				</button>
			</ul>
		</div>
	);
};
export default Header;
