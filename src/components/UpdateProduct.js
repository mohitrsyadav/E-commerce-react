import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {API} from "../../src/api"
const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`${API}product/${params.id}`);
        result = await result.json();
        const { name, price, category, company } = result;
        setName(name);
        setPrice(price);
        setCategory(category);
        setCompany(company);
    }

    const updateProduct = async () => {
        let result = await fetch(`${API}product/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        navigate("/")
    }

    return (
        <div className="product">
            <h1>Update Product</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} className="inputBox" type="text" placeholder="Enter product name" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="inputBox" type="text" placeholder="Enter product price" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="inputBox" type="text" placeholder="Enter product category" />
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="inputBox" type="text" placeholder="Enter product company" />
            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    )
}
export default UpdateProduct;