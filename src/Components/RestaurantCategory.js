import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
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
						{data.title} ({data.itemCards.length})
					</span>
					<span>🔽</span>
				</div>
				{/* Accordion Body */}
				{showItems && <ItemList items={data.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
