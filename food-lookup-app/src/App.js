import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import FoodTable from './components/FoodTable';
import SelectedFoodsTable from './components/SelectedFoodsTable';
import AddFoodForm from './components/AddFoodForm';

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

  const handleAddFood = (newFood) => {
    // Step 1: Validate the form data
    if (!newFood.name || !newFood.calories || !newFood.protein || !newFood.carbs || !newFood.fats) {
      alert('All fields are required');
      return;
    }

    // Step 2: Make an HTTP POST request to the server
    fetch('http://localhost:3001/foods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFood),
    })
      .then(response => {
        // Step 3: Handle the server response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // This assumes that your server responds with the created food item as JSON
      })
      .then(data => {
        // Here, 'data' is the response from the server after the food item has been successfully created
        console.log('Success:', data);

        // Step 4: Update the UI
        // If you have a state variable that keeps track of the food items, update it here
        // setFoods([...foods, data]); // Uncomment this if you have a 'foods' state in your component

        // Optionally, navigate away from the form or clear the form
        // history.push('/foods'); // Uncomment if using react-router's 'history' for navigation
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
  };

  // Main page component
  const MainPage = () => {
    return (
      <>
        {selectedFoods.length > 0 && <SelectedFoodsTable selectedFoods={selectedFoods} />}
        <Search onSearch={handleSearch} />
        <FoodTable foods={filteredFoods} onRowClick={handleAddToSelectedFoods} />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-food" element={<AddFoodForm onAddFood={handleAddFood} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;