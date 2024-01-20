import { useParams } from "react-router-dom";

import { imgCdnUrl } from "../Utils/Constants";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { id } = useParams();

	const menuData = useRestaurantMenu(id);

	if (menuData === null) return <ShimmerMenu />;

	const { name, cloudinaryImageId, avgRating, costForTwoMessage, cuisines } =
		menuData.cards[0].card.card.info;

	const { itemCards } =
		menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
	console.log(itemCards);

	return (
		<div className=" flex justify-center items-center flex-col  h-min">
			<h2 className="text-7xl">{name}</h2>
			<div className=" m-4 flex justify-between  w-2/5 p-4 bg-gray-200 rounded-xl">
				<div className=" flex flex-col bg-gray-300 w-1/2 p-2">
					<h3 className="text-xl">{cuisines.join(", ")}</h3>
					<h3>{costForTwoMessage}</h3>
					<h4>{avgRating} stars</h4>
				</div>
				<img
					className="w-36 rounded-lg"
					src={imgCdnUrl + cloudinaryImageId}
				></img>
			</div>

			<div className="  w-2/5 p-3 h-3/4">
				<h2 className="text-xl">Menu</h2>
				<ul className=" bg-gray-300">
					{itemCards.map((item) => (
						<li className="list-[disc] text-gray-700" key={item.card.info.id}>
							{item.card.info.name}-{"  Rs. "}
							{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
