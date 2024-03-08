import React, { useState } from 'react';

const AddFoodForm = ({ onAddFood }) => {
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
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="number" name="calories" value={formData.calories} onChange={handleChange} placeholder="Calories" />
      <input type="number" name="protein" value={formData.protein} onChange={handleChange} placeholder="Protein" />
      <input type="number" name="carbs" value={formData.carbs} onChange={handleChange} placeholder="Carbs" />
      <input type="number" name="fats" value={formData.fats} onChange={handleChange} placeholder="Fats" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddFoodForm;
