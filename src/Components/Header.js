import { useState } from "react";
import logoImg from "../../assets/logo.png";
const Title = () => {
	return (
		<div className="title">
			<img src={logoImg}></img>
		</div>
	);
};

const Header = () => {
	const [logBtn, setLogBtn] = useState("Log In");
	return (
		<div className="header">
			<Title />

			<ul className="nav-items">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Cart</li>
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
