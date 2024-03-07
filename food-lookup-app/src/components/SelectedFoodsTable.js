import React from 'react';
import './SelectedFoodsTable.css'; // Make sure to create this CSS file

function SelectedFoodsTable({ selectedFoods }) {
  // Function to calculate total nutrients
  const calculateTotals = () => {
    return selectedFoods.reduce(
      (totals, food) => {
        totals.kcal += food.calories;
        totals.protein += food.protein;
        totals.fat += food.fats;
        totals.carbs += food.carbs;
        return totals;
      },
      { kcal: 0, protein: 0, fat: 0, carbs: 0 }
    );
  };

  const totals = calculateTotals();

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
          </tr>
        </thead>
        <tbody>
          {selectedFoods.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.calories.toFixed(2)}</td>
              <td>{food.protein.toFixed(2)}</td>
              <td>{food.fats.toFixed(2)}</td>
              <td>{food.carbs.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="totals-row">
            <td>Total</td>
            <td>{totals.kcal.toFixed(2)}</td>
            <td>{totals.protein.toFixed(2)}</td>
            <td>{totals.fat.toFixed(2)}</td>
            <td>{totals.carbs.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectedFoodsTable;
