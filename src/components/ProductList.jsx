import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({products,groupName,remove,setVisible}) => {
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{groupName}</h1>
                {products.map((product,index) => 
                    <ProductItem setV = {setVisible} remove={remove} number={index+1} key={product.id} product={product}/>
                )}
        </div>
    );
};

export default ProductList;