import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Task2.scss";

const Task2 = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("All");

    const brands = ["All", "Sony", "Microsoft", "Apple", "Samsung"];



    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.in/api/products");
            const data = Array.isArray(res.data.products) ? res.data.products : [];
            setProducts(data);
            setFiltered(data);
        } catch (err) {
            console.error("Error fetching products:", err);
            setProducts([]);
            setFiltered([]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        if (brand === "All") {
            setFiltered(products);
        } else {
            const filteredItems = products.filter((product) =>
                product.title?.toLowerCase().includes(brand.toLowerCase())
            );
            setFiltered(filteredItems);
        }
    };

    return (
        <div className="product-filter">
            <div className="header">
                <h2> Products</h2>

            </div>


            <div className="filters">
                {brands.map((brand) => (
                    <button
                        key={brand}
                        className={`filter-btn ${selectedBrand === brand ? "active" : ""}`}
                        onClick={() => handleBrandClick(brand)}
                    >
                        {brand}
                    </button>
                ))}
            </div>


            <div className="product-flex">
                {Array.isArray(filtered) && filtered.length > 0 ? (
                    filtered.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <p className="title">{product.title.slice(0, 30)}...</p>
                            <p className="price">₹{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found for "{selectedBrand}"</p>
                )}
            </div>
        </div>
    );
};

export default Task2;
