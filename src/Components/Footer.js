import UserContext from "../Utils/UserContext";
import { useContext } from "react";
const Footer = () => {
	const { loggedInUser } = useContext(UserContext);
	return (
		<div className="footer bg-black text-white h-36 flex justify-center text-xl">
			<h2 className="p-2 m-2">
				Copyright <span className=" ml-3">Shruti Garg(footer)</span>
			</h2>
			<h3 className="font-bold ">{loggedInUser}</h3>
		</div>
	);
};
export default Footer;
