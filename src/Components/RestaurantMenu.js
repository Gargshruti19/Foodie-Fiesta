import { useParams } from "react-router-dom";

import { imgCdnUrl } from "../Utils/Constants";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
	const { id } = useParams();

	const menuData = useRestaurantMenu(id);

	if (menuData === null) return <ShimmerMenu />;

	const {
		name,
		cloudinaryImageId,
		avgRating,
		costForTwoMessage,
		cuisines,
		areaName,
		sla,
	} = menuData.cards[0].card.card.info;
	console.log(menuData.cards[0].card.card.info);
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
			<div>
				<h2 className="text-3xl font-bold">{name}</h2>

				<h3 className="text-xl font-bold">{cuisines.join(", ")}</h3>
				<h4>
					{areaName} {", "} {sla.lastMileTravelString}
				</h4>
			</div>
			<h4>{avgRating} stars</h4>
			<h3>{costForTwoMessage}</h3>
			{/* Accordions */}
			{categories.map((category) => (
				<RestaurantCategory data={category.card.card} />
			))}
		</div>
	);
};

export default RestaurantMenu;
