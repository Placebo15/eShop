import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleProductClick = () => {
        // Navigate to the ProductInfo page with the specific product ID
        navigate(`/products/${id}`);
    };

    return (
        <div className="cartItem">
            <img src={productImage} alt={productName} onClick={handleProductClick} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input

                        type="number"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
};
