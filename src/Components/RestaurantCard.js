import { imgCdnUrl } from "../Utils/Constants";

const RestaurantCard = ({
	cloudinaryImageId,
	name,
	cuisines,
	areaName,
	costForTwo,
	avgRating,
}) => {
	return (
		<div className="restaurant-card">
			<img src={imgCdnUrl + cloudinaryImageId}></img>
			<h1>{name}</h1>
			<h2>Area - {areaName}</h2>
			<h3>{cuisines.join(", ")}</h3>
			<h4>Cost - {costForTwo}</h4>
			<h5>{avgRating} stars</h5>
		</div>
	);
};
export default RestaurantCard;
