import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import FoodTable from './components/FoodTable';
import SelectedFoodsTable from './components/SelectedFoodsTable';
// Add any other imports you may need

function App() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/foods')
      .then(response => response.json())
      .then(data => {
        setFoods(data);
        setFilteredFoods(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = term => {
    setSearchTerm(term);
    if (!term) {
      setFilteredFoods(foods); // If the search term is empty, show all foods
    } else {
      setFilteredFoods(foods.filter(food =>
        food.name.toLowerCase().includes(term.toLowerCase())
      ));
    }
  };

  const handleAddToSelectedFoods = (foodToAdd) => {
    setSelectedFoods(prevSelectedFoods => {
      // Check if the item already exists in the array
      const existingItemIndex = prevSelectedFoods.findIndex(item => item.id === foodToAdd.id);
      if (existingItemIndex > -1) {
        // If it exists, create a new array with the count incremented
        return prevSelectedFoods.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      } else {
        // If it doesn't exist, add the new item with a count of 1
        return [...prevSelectedFoods, { ...foodToAdd, count: 1 }];
      }
    });
  };


  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {selectedFoods.length > 0 && (
        <SelectedFoodsTable selectedFoods={selectedFoods} />
      )}
      <FoodTable foods={filteredFoods} onRowClick={handleAddToSelectedFoods} />
    </div>
  );
}

export default App;
