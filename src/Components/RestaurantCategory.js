import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (props) => {
	// console.log(props.data.itemCards);
	const { title, itemCards } = props.data;
	const [showItems, setShowItems] = useState(false);

	const handleClick = () => {
		if (showItems) {
			setShowItems(false);
		} else {
			setShowItems(true);
		}
	};

	return (
		<div className="w-full flex justify-center items-center">
			{/* Header */}
			<div className="w-1/2 bg-gray-50 shadow-xl p-4  m-2 ">
				<div
					className="flex justify-between items-center flex-wrap w-full cursor-pointer"
					onClick={handleClick}
				>
					<span className="font-bold">
						{title} ({itemCards.length})
					</span>
					<span>🔽</span>
				</div>
				{/* Accordion Body */}
				{showItems && <ItemList items={itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
