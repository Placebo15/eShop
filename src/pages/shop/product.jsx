import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];

    return (
        <div className="product">
            <Link to={`/products/${id}`}><img src={productImage} alt="" />
            </Link>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
            </div>


        </div>
    );
};