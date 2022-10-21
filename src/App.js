import './App.css';
import SuccessSendRating from './components/SuccessSendRating';
import Rating from './components/Rating';
import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [rating, setRating] = useState(0);

  const handleRating = (ratingFromUser) => {
    setRating(ratingFromUser);
  }

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Rating handleRating={handleRating} rating={rating} />} />
        <Route path="/success" element={<SuccessSendRating rating={rating} />} />
      </Routes>
    </main>
  );
}

export default App;
