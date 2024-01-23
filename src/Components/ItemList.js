import { img_Menu_Food } from "../Utils/Constants";

const ItemList = ({ items }) => {
	// console.log(items);
	return (
		<div className="flex justify-center flex-col  m-3 bg-gray-300">
			{items.map((item) => (
				<div
					className="flex  bg-gray-50 p-5 border-b-2 border-gray-300 pb-16 justify-between space-x-2"
					key={item.card.info.id}
				>
					<div className="flex flex-col  space-y-1 w-4/5">
						<span className="text-base text-gray-900">
							{item.card.info.name}
						</span>
						<span className="text-sm text-gray-900">
							{"₹ "}
							{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
						</span>
						<p className="text-xs text-gray-400">
							{item.card.info.description}
						</p>
					</div>
					<div className="w-1/5 flex justify-end">
						<img
							className="w-32 rounded-lg h-24 mt-2"
							src={img_Menu_Food + item.card.info.imageId}
						></img>
					</div>
				</div>
			))}
		</div>
	);
};
export default ItemList;