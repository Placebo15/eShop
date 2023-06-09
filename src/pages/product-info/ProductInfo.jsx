import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import "./ProductInfo.css"; // Import the CSS file

const ProductInfo = () => {
    const { id } = useParams();
    const { PRODUCTS, addToCart, cartItems } = useContext(ShopContext);
    const [product, setProduct] = useState(null);
    const [selectedAngle, setSelectedAngle] = useState(0);

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

    const { productName, price, productImages, description, specification, comments } = product;

    const handleAngleChange = (angleIndex) => {
        setSelectedAngle(angleIndex);
    };

    return (
        <div className="product-info-container">
            <h2>{productName}</h2>
            <div className="productAndImage">
                <img className="bigImage" src={productImages[selectedAngle]} alt={productName} />


                <div className="descript">
                    <h3>Description:</h3>
                    <p>{description}</p>
                    <h3>Specification:</h3>
                    <ul>
                        {specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="angle-links">
                {productImages.map((image, index) => (
                    <Link
                        key={index}
                        className={`angle-link ${selectedAngle === index ? "selected" : ""}`}
                        onClick={() => handleAngleChange(index)}
                    >
                        <img src={image} alt={`Angle ${index + 1}`} />
                    </Link>
                ))}
            </div>
            <div className="price">
                <p>Price: ${price}</p></div>
            <button className="addToCartBttn1" onClick={() => addToCart(id)}>
                Add To Cart {cartItemsCount > 0 && <> ({cartItemsCount})</>}
            </button>

            <div className="comments">
                <h3>Comments:</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p style={{ color: "green", fontStyle: "italic" }}>Username: {comment.username}</p>
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
