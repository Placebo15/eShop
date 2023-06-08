import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import "./ProductInfo.css"; // Import the CSS file

const ProductInfo = () => {
    const { id } = useParams();
    const { PRODUCTS, addToCart, cartItems } = useContext(ShopContext);
    const [product, setProduct] = useState(null);

    const cartItemsCount = cartItems[id];
    useEffect(() => {
        const getProductById = () => {
            const foundProduct = PRODUCTS.find((p) => p.id === Number(id));
            setProduct(foundProduct);
        };

        getProductById();
    }, [id, PRODUCTS]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const { productName, price, productImage, description, specification, comments } = product;

    return (


        <div className="product-info-container">
            <h2>{productName}</h2>
            <div className="productAndImage">
                <img src={productImage} alt={productName} />
                <div className="descript"><h3>Description:</h3>
                    <p>{description}</p>
                    <h3>Specification:</h3>
                    <ul>
                        {specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="price">
                <p>Price: ${price}</p>
                <button className="addToCartBttn1" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemsCount > 0 && <> ({cartItemsCount})</>}
                </button>
            </div>
            <div className="comments">
                <h3>Comments:</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p style={{ color: "Green", fontStyle: "italic" }}>Username: {comment.username}</p>
                            <p>Comment: {comment.comment}</p>
                            <p style={{ color: "darkblue", fontStyle: "italic" }}>Rating: {comment.rating}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ProductInfo;
