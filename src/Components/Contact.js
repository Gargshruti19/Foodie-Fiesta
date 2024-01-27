const Contact = () => {
	return (
		<div>
			<h1 className="m-4 p-4 text-5xl font-bold">Contact Us</h1>
			<form>
				<input
					type="text"
					className="text-2xl border-2 border-black p-2 m-2 rounded-lg"
					placeholder="name"
				></input>
				<input
					type="text"
					className="text-2xl border-2 border-black p-2 m-2 rounded-lg"
					placeholder="message"
				></input>
				<button className="bg-green-500 text-white py-2 px-4 rounded-lg text-2xl">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
