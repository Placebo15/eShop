import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";


export const Category = ({ category }) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Perform the search whenever the search input value changes
        const results = PRODUCTS.filter(
            (product) =>
                product.category === category &&
                product.productName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results);
    }, [searchInput, category]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="shop">
            <h2 className="shopTitle">{category}</h2>
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
