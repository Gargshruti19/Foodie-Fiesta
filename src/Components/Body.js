import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { swiggyApiUrl } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
const filterData = (searchText, restaurants) => {
	return restaurants.filter((restaurant) => {
		if (restaurant.info && restaurant.info.name) {
			return restaurant.info.name
				.toLowerCase()
				.includes(searchText.toLowerCase());
		} else {
			return false; // Exclude if `info` or `name` is missing
		}
	});
};

const Body = () => {
	const [searchText, setSearchText] = useState(" ");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	//this withPromotedLabel is a higher order component
	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	// console.log(allRestaurants);

	useEffect(() => {
		getRestaurant();
	}, []);

	const getRestaurant = async () => {
		const data = await fetch(swiggyApiUrl);

		const json = await data.json();

		// console.log(
		// 	json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		// );
		setAllRestaurants(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	if (!allRestaurants) return null;

	// if (filteredRestaurant.length === 0)
	// 	return <h1>No restaurant match your filter</h1>;

	const onlineStatus = useOnlineStatus();

	if (!onlineStatus)
		return (
			<h1>
				Looks like you're offline !! Please check your Internet Connection
			</h1>
		);

	return (
		<>
			{allRestaurants.length === 0 ? (
				<Shimmer {...allRestaurants.info} /> // Show Shimmer while data is loading
			) : (
				<>
					<div className="search-container  flex justify-center items-center m-6 space-x-5">
						<input
							className="w-96 border-2 border-slate-400 shadow-orange-600 p-2 rounded-xl focus:outline-none focus:ring focus:ring-violet-100 placeholder:text-gray-400 text-gray-700 "
							type="text"
							placeholder="Search Your Favourite Restaurant"
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						></input>
						<button
							className="bg-green-600 p-2 rounded-xl px-4 border-0 text-white hover:bg-green-700"
							onClick={() => {
								const filterRestaurant = filterData(searchText, allRestaurants);
								setFilteredRestaurant(filterRestaurant);
							}}
						>
							Search
						</button>
						<button
							className="bg-green-900 p-2 rounded-xl px-4 border-0 text-white hover:bg-green-800"
							onClick={() => {
								const filteredList = allRestaurants.filter(
									(res) => res.info.avgRating > 4
								);
								// console.log(filteredList);
								setFilteredRestaurant(filteredList);
							}}
						>
							Top Rated Restaurants
						</button>
						<label for="user-name" className="font-bold text-xl">
							User Name :
						</label>
						<input
							id="user-name"
							className="bg-black text-white placeholder:text-white px-2 py-1 placeholder:text-sm"
							placeholder="Typing...."
						></input>
					</div>

					<div className="flex flex-wrap space-x-8 justify-center">
						{searchText === "" && filteredRestaurant.length === 0 ? (
							<h1>No restaurants found</h1> // Handle empty search and no matches
						) : filteredRestaurant.length > 0 ? (
							filteredRestaurant.map((restaurant) => (
								<Link
									key={restaurant.info.id}
									to={"/restaurant/" + restaurant.info.id}
								>
									{restaurant.info.isNewlyOnboarded ? (
										<RestaurantCardPromoted {...restaurant.info} />
									) : (
										<RestaurantCard {...restaurant.info} />
									)}
								</Link>
							))
						) : (
							<h1>No restaurant found</h1>
						)}
					</div>
				</>
			)}
		</>
	);
};
export default Body;
