const Shimmer = () => {
	return (
		<div className="restaurant-list">
			{Array(20)
				.fill("")
				.map((e, index) => (
					<div key={index} className="shimmer-div"></div>
				))}
		</div>
	);
};
export default Shimmer;
