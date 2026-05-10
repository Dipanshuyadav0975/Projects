import { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border-b py-4">

                        <img src={item.img} alt="" className="w-20" />

                        <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p className="text-gray-500">{item.price}</p>
                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                        >
                            Remove
                        </button>

                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
