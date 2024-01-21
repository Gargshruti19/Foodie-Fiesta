import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
	// console.log(props.data.itemCards);
	const { title, itemCards } = props.data;
	return (
		<div className="w-full flex justify-center items-center">
			{/* Header */}
			<div className="w-1/2 bg-gray-50 shadow-xl p-4  m-2 ">
				<div className="flex justify-between items-center flex-wrap w-full">
					<span className="font-bold">
						{title} ({itemCards.length})
					</span>
					<span>🔽</span>
				</div>
				{/* Accordion Body */}
				<ItemList items={itemCards} />
			</div>
			
		</div>
	);
};

export default RestaurantCategory;
