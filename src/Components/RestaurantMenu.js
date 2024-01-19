import { useParams } from "react-router-dom";

import { imgCdnUrl } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { id } = useParams();

	const menuData = useRestaurantMenu(id);

	if (menuData === null) return <Shimmer />;

	const { name, cloudinaryImageId, avgRating, costForTwoMessage, cuisines } =
		menuData.cards[0].card.card.info;

	const { itemCards } =
		menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
	console.log(itemCards);

	return (
		<div>
			<h2>{name}</h2>
			<img src={imgCdnUrl + cloudinaryImageId}></img>
			<h3>{cuisines.join(", ")}</h3>
			<h3>{costForTwoMessage}</h3>
			<h4>{avgRating} stars</h4>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name}-{"  Rs. "}
						{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;