import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
///////////
import CartContext from './contexts/CartContext'
import ProductContexts from './contexts/ProductContexts'

function App() {

	const [products] = useState(data);
  const [cart, setCart] = useState([]);
	const addItem = item => {
    setCart([...cart, item])  //spreaaaaaaaaaaaad it
  };
  
	return (
    <ProductContexts.Provider value={{products, addItem}}>
      <CartContext.Provider value={{cart}}>
		<div className="App">
			<Navigation />
			<Route exact path="/">

        <Products />
			</Route>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
    </CartContext.Provider> {/* wrapping yay! */}
    </ProductContexts.Provider>
	);
}

export default App;
