import React, {useContext} from 'react'

import Product from './Product';
import ProductContexts from '../contexts/ProductContexts';

const Products = () => {
  const {products, addItem} = useContext(ProductContexts)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
}

export default Products;
