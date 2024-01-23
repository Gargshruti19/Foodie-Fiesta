import { useParams } from "react-router-dom";

import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
	const { id } = useParams();

	const menuData = useRestaurantMenu(id);
	const [showIndex, setShowIndex] = useState(null);
	if (menuData === null) return <ShimmerMenu />;

	const {
		name,
		cloudinaryImageId,
		avgRating,
		costForTwoMessage,
		cuisines,
		areaName,
		sla,
		totalRatingsString,
	} = menuData.cards[0].card.card.info;
	// console.log(menuData.cards[0].card.card.info);
	const { itemCards } =
		menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
	// console.log(itemCards);

	// console.log(menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
	const categories =
		menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
			(category) =>
				category.card?.card?.["@type"] ==
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	// console.log(categories);

	return (
		<div className="flex justify-center flex-col items-center">
			<div className="flex justify-between w-1/2 mt-10 border-b-2 border-dashed border-gray-300 pb-10">
				<div>
					<h2 className="text-2xl font-bold">{name}</h2>

					<h3 className="text-sm text-gray-400 ">{cuisines.join(", ")}</h3>
					<h4 className="text-sm text-gray-400">
						{areaName} {", "} {sla.lastMileTravelString}
					</h4>
				</div>
				<div className="border-2 border-gray-200">
					<h4 className="bg-green-500 text-white p-1 border-0 w-14 rounded-xl m-1">
						{"⭐"}
						{avgRating}
					</h4>
					<h4 className="text-xs text-gray-400 pt-2 border-t-2 border-gray-300">
						{totalRatingsString}
					</h4>
				</div>
			</div>
			<div className="flex justify-start w-1/2 m-5 font-bold space-x-2">
				<h3>{sla.slaString}</h3>
				<h3 className="">{costForTwoMessage}</h3>
			</div>
			{/* Accordions */}
			{categories.map((category, index) => (
				//Controlled Component
				<RestaurantCategory
					data={category.card.card}
					key={category.card.card.title}
					showItems={index === showIndex && true}
					setShowIndex={() => setShowIndex(index)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
