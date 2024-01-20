import { useState } from "react";
import logoImg from "../../assets/logo.png";

import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Title = () => {
	return (
		<div className="title w-24 mx-4">
			<img className="logo" src={logoImg}></img>
		</div>
	);
};

const Header = () => {
	const [logBtn, setLogBtn] = useState("Log In");
	const onlineStatus = useOnlineStatus();
	return (
		<div className="flex bg-orange-400 justify-between h-24 ">
			<Title />

			<ul className="nav-items flex space-x-6 text-xl p-4 m-4">
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
				<Link to="/grocery">
					<li>Grocery</li>
				</Link>

				<Link>
					<li>Cart</li>
				</Link>

				<button
					className="bg-green-600 text-white rounded-xl px-4 h-10 text-base hover:bg-green-700"
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
