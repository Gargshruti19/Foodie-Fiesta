import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div className="text-center m-5 p-5">
			<h1 className="text-2xl font-bold">Cart</h1>
			<div className="w-1/2  m-auto">
				<button
					className=" text-white bg-green-500 px-4 py-1 border-0 outline-0 rounded-lg hover:bg-green-600"
					onClick={handleClearCart}
				>
					Clear cart
				</button>
				{cartItems.length === 0 && <h1>Cart is empty Add Items to the Cart</h1>}
				<ItemList items={cartItems} />
			</div>
		</div>
	);
};
export default Cart;
