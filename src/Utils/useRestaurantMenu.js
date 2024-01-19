//custom hooks
import { useEffect, useState } from "react";

import { swiggyMenuApiURL } from "./Constants";

const useRestaurantMenu = (id) => {
	const [menuData, setMenuData] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(swiggyMenuApiURL + id);
		const json = await data.json();

		setMenuData(json.data);
	};
	return menuData;
};

export default useRestaurantMenu;
