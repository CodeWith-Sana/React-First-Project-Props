import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';  
import Products from './Components/Products';
import CORE_BOOKS from './Components/ProductsData';


function App() {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      {/* Object in List CORE_BOOKS  is accessed using map function , and passing each those paarmeters as props to Product Component */}
      <div className="products-container">
      {CORE_BOOKS.map((book, index) => (

        <Products 
        image={book.image}
        title={book.title}
        price={book.price}
        descrip={book.description}/>
      ))}
      </div>
      
    </div>
    
  );
}

export default App;
