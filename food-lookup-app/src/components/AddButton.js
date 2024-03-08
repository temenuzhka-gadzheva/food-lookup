import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddButton.css';

const AddButton = () => {
    let navigate = useNavigate();

    const navigateToAddFoodForm = () => {
        navigate('/add-food');
    };

    return (
        <button className="add-product-button" onClick={navigateToAddFoodForm}> Add Product </button>
    );
}

export default AddButton;
