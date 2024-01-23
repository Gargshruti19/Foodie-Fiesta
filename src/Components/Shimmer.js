const Shimmer = ({data}) => {
	return (
		<div>
			<div className="flex justify-center">
				<p className="bg-gray-300 w-1/2 h-16 flex text-center my-5"></p>
			</div>
			<div className="flex flex-wrap space-x-8 justify-center my-10">
				{Array(10)
					.fill(" ")
					.map((item, index) => (
						<div
							key={index}
							className=" flex flex-col justify-center items-center w-[250px] h-96 p-2 bg-gray-200 rounded-lg my-4"
						></div>
					))}
			</div>
		</div>
	);
};
export default Shimmer;
