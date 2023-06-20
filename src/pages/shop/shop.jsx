import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

import "./shop.css";

export const Shop = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Perform the search whenever the search input value changes
        const results = PRODUCTS.filter((product) =>
            product.productName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results);
    }, [searchInput]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>eShop</h1>
            </div>

            <div className="searchBar">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    placeholder="Search products..."
                />
            </div>

            <div className="products">
                {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                        <Product key={product.id} data={product} />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};
