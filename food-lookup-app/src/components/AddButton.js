import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddButton.css';

function AddButton() {
    let navigate = useNavigate(); // Hook to navigate

    const navigateToAddFoodForm = () => {
        navigate('/add-food'); // Function to navigate to AddFoodForm
    };

    return (
        <button className="add-product-button" onClick={navigateToAddFoodForm}> Add Product </button>
    );
}

export default AddButton;
