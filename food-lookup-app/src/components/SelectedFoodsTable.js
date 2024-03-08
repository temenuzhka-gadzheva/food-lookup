import React from 'react';
import './FoodTable.css';
import { calculateTotalNutrients } from './utils/utils';

function SelectedFoodsTable({ selectedFoods }) {
  const totals = calculateTotalNutrients(selectedFoods);

  return (
    <div className="food-table-container">
      <h3>Selected foods</h3>
      <table className="food-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Kcal</th>
            <th>Protein (g)</th>
            <th>Fat (g)</th>
            <th>Carbs (g)</th>
            <th>Selected count</th>
          </tr>
        </thead>
        <tbody>
          {selectedFoods.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{(food.calories * food.count).toFixed(1)}</td>
              <td>{(food.protein * food.count).toFixed(1)}</td>
              <td>{(food.fats * food.count).toFixed(1)}</td>
              <td>{(food.carbs * food.count).toFixed(1)}</td>
              <td>{food.count}</td>
            </tr>
          ))}
          <tr className="totals-row">
            <td>Total</td>
            <td>{totals.kcal.toFixed(1)}</td>
            <td>{totals.protein.toFixed(1)}</td>
            <td>{totals.fat.toFixed(1)}</td>
            <td>{totals.carbs.toFixed(1)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectedFoodsTable;
