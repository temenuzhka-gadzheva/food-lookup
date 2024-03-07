import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import FoodTable from './components/FoodTable';
// Add any other imports you may need

function App() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <FoodTable foods={filteredFoods} />
    </div>
  );
}

export default App;
