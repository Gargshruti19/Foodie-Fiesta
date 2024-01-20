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
		<div className=" flex flex-col justify-center items-center w-[250px] h-96 p-2 bg-gray-50 rounded-lg my-4 hover:bg-gray-200 shadow-gray-200 shadow-lg transition-all hover:scale-90 duration-300">
			<img
				className=" w-[220px] h-[180px] rounded-lg"
				src={imgCdnUrl + cloudinaryImageId}
			></img>
			<h1 className="font-bold p-2 text-lg">{name}</h1>
			<h2>Area - {areaName}</h2>
			<h3>{cuisines.join(", ")}</h3>
			<h4>Cost - {costForTwo}</h4>
			<h5>{avgRating} stars</h5>
		</div>
	);
};
export default RestaurantCard;
