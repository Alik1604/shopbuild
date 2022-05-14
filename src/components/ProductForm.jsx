import React from 'react';
import MyInput from './UI/Input/MyInput';
import AddButton from './UI/Button/AddButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../features/addProductSlice';
import { AlphabeticallySort } from '../features/addProductSlice';

const ProductForm = (props) => {
      const dispatch = useDispatch();

      const [product, setProduct] = useState({imageUrl:"", name:'', count: '', size : {width : '', height:''}, weight: "", comments:[]});
    
      function addproduct(e) {
        e.preventDefault();
        if(product.imageUrl === '' || product.count === '' || product.size.height === 
        '' || product.size.width === '' || product.weight === ''){
            alert('Enter all information, please')
            setProduct({imageUrl:"", name:'', count: '', size : {width : '', height:''}, weight: "", comments:[]});
            props.create();
            return
        }
      
        const newProduct = {...product,id:Date.now()}
        dispatch(AddProduct(newProduct))
        dispatch(AlphabeticallySort())
        setProduct({imageUrl:"", name:'', count: '', size : {width : '', height:''}, weight: "", comments:[]});
        props.create();
      }

      function cancale(e){
        e.preventDefault();
        setProduct({imageUrl:"", name:'', count: '', size : {width : '', height:''}, weight: "", comments:[]});
        props.create();
      }
    return (
        <form>
          <h5>Name</h5>
          <MyInput value = {product.name}  onChange={e => setProduct({...product,name:e.target.value})} type="text" placeholder="Name"/>
          <h5>URL</h5>
          <MyInput value = {product.imageUrl}  onChange={e => setProduct({...product,imageUrl:e.target.value})} type="text" placeholder="URL"/>
          <h5>Count</h5>
          <MyInput value = {product.count}  onChange={e => setProduct({...product,count:e.target.value})} type="text" placeholder="Count"/>
          <h5>Size</h5>
          <MyInput value = {product.size.height}  onChange={e => setProduct({...product, size : {...product.size,height:e.target.value}})} type="text" placeholder="Height"/>
          <MyInput value = {product.size.width}  onChange={e => setProduct({...product,size :  {...product.size,width:e.target.value}})} type="text" placeholder="Width"/>
          <h5>Weight</h5>
          <MyInput value = {product.weight}  onChange={e => setProduct({...product,weight:e.target.value})} type="text" placeholder="Weight"/>
          <AddButton  onClick={addproduct}>Add</AddButton>
          <AddButton style={{marginLeft:'5px'}}onClick={cancale}>Cancel</AddButton>
      </form>
    );
};

export default ProductForm;