import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import "./category.css";

export const Category = ({ category }) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showFilterBar, setShowFilterBar] = useState(false);

    useEffect(() => {
        const results = PRODUCTS.filter(
            (product) =>
                product.category === category &&
                product.productName.toLowerCase().includes(searchInput.toLowerCase()) &&
                (selectedFilters.length === 0 || selectedFilters.includes(product.property))
        );
        setSearchResults(results);
    }, [searchInput, category, selectedFilters]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setSelectedFilters((prevFilters) => {
            if (prevFilters.includes(value)) {
                return prevFilters.filter((filter) => filter !== value);
            } else {
                return [...prevFilters, value];
            }
        });
    };

    const toggleFilterBar = () => {
        setShowFilterBar((prevShowFilterBar) => !prevShowFilterBar);
    };

    return (
        <div className={`shop ${searchResults.length === 0 ? "noResults" : ""}`}>
            <h1 className="categoryTitle">{category}</h1>
            <div className="searchBar">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    placeholder="Search products..."
                />
            </div>
            <button className="toggleFilterButton" onClick={toggleFilterBar}>
                {showFilterBar ? "Hide Filter" : "Show Filter"}
            </button>
            {showFilterBar && (
                <div className="filterBar">
                    <label>
                        <input
                            type="checkbox"
                            value="filter1"
                            checked={selectedFilters.includes("filter1")}
                            onChange={handleFilterChange}
                        />
                        Filter 1
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="filter2"
                            checked={selectedFilters.includes("filter2")}
                            onChange={handleFilterChange}
                        />
                        Filter 2
                    </label>
                    {/* Add more filter options as needed */}
                </div>
            )}
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
