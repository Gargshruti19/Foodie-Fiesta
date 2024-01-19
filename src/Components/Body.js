import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { swiggyApiUrl } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../Utils/useOnlineStatus";
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
	const [searchText, setSearchText] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	useEffect(() => {
		getRestaurant();
	}, []);

	const getRestaurant = async () => {
		const data = await fetch(swiggyApiUrl);

		const json = await data.json();

		console.log(
			json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		);
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
				<Shimmer /> // Show Shimmer while data is loading
			) : (
				<>
					<div className="search-container">
						<input
							type="text"
							placeholder="Search Your Favourite Restaurant"
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						></input>
						<button
							onClick={() => {
								const data = filterData(searchText, allRestaurants);
								setFilteredRestaurant(data);
							}}
						>
							Search
						</button>
					</div>

					<div className="restaurant-list">
						{searchText === "" && filteredRestaurant.length === 0 ? (
							<h1>No restaurants found</h1> // Handle empty search and no matches
						) : filteredRestaurant.length > 0 ? (
							filteredRestaurant.map((restaurant) => (
								<Link
									key={restaurant.info.id}
									to={"/restaurant/" + restaurant.info.id}
								>
									{" "}
									<RestaurantCard {...restaurant.info} />
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
