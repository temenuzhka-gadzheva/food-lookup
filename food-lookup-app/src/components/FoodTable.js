import React from 'react';
import './FoodTable.css'; // Make sure to create this CSS file in the same directory

const FoodTable = ({ foods}) => {
    return (
        <div className="food-table-container">
            <table className="food-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Protein (g)</th>
                        <th>Carbs (g)</th>
                        <th>Fats (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(food => (
                        <tr key={food.id}>
                            <td>{food.name}</td>
                            <td>{food.calories}</td>
                            <td>{food.protein}</td>
                            <td>{food.carbs}</td>
                            <td>{food.fats}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodTable;
