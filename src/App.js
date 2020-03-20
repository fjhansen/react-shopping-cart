import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';



// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './contexts/CartContext'

import ProductContext from './contexts/ProductContexts'

function App() {

	const [products] = useState(data);
  const [cart, setCart] = useState([]);
	const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item])  //spreaaaaaaaaaaaad it
  };
  
	return (
    <ProductContext.Provider value={{products, addItem}}>
      <CartContext.Provider>
		<div className="App">
			<Navigation cart={cart} />
			<Route exact path="/">

        <Products />
			</Route>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
    </CartContext.Provider> {/* wrapping yay! */}
    </ProductContext.Provider>
	);
}

export default App;
