import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFoodForm.css';

const AddFoodForm = ({ onAddFood }) => {
  const navigate                = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood(formData);
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add-food-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input type="number" id="calories" name="calories" step="0.1" value={formData.calories} onChange={handleChange} placeholder="Calories" />
        </div>
        <div className="form-group">
          <label htmlFor="protein">Protein:</label>
          <input type="number" id="protein" name="protein" step="0.1" value={formData.protein} onChange={handleChange} placeholder="Protein" />
        </div>
        <div className="form-group">
          <label htmlFor="carbs">Carbs:</label>
          <input type="number" id="carbs" name="carbs" step="0.1" value={formData.carbs} onChange={handleChange} placeholder="Carbs" />
        </div>
        <div className="form-group">
          <label htmlFor="fats">Fats:</label>
          <input type="number" id="fats" name="fats" step="0.1" value={formData.fats} onChange={handleChange} placeholder="Fats" />
        </div>

        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
