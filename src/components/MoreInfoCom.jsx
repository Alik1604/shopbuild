import React from 'react';
import MyInput from './UI/Input/MyInput';
import AddButton from './UI/Button/AddButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlphabeticallySort } from '../features/addProductSlice';
import { EdditCurrent } from '../features/addProductSlice';
import Commetnts from './Commetnts';

const MoreInfo = (props) => {
      const dispatch = useDispatch();
      const current = useSelector((state) => state.Product.currenItem);
      const [product, setProduct] = useState({id:"",imageUrl:"", name:'', count: '', size : {width : '', height:''}, weight: "", comments:[]});
    
      function edit(e) {
        e.preventDefault();
        dispatch(EdditCurrent({...current,imageUrl:product.imageUrl, name:product.name, count: product.count, size : {width : product.size.width, height: product.size.height}, weight: product.weight, comments:[1,2,3]}))
        dispatch(AlphabeticallySort())
        setProduct({imageUrl:"", id:"", name:'', count: '', size : {width : '', height:''}, weight: "", comments:[]});
        props.create();
      }

      function cancale(e){
        e.preventDefault();
        setProduct(current);
        props.create();
      }
    return (
        <form>
          <h5>Name - {current.name}</h5>
          <MyInput value = {product.name}  onChange={e => setProduct({...product,name:e.target.value})} type="text" placeholder="Enter new name"/>
          <h5>URL - {current.imageUrl}</h5>
          <MyInput value = {product.imageUrl}  onChange={e => setProduct({...product,imageUrl:e.target.value})} type="text" placeholder="URL"/>
          <h5>Count - {current.count}</h5>
          <MyInput value = {product.count}  onChange={e => setProduct({...product,count:e.target.value})} type="text" placeholder="Count"/>
          <h5>Size - {current.size.height} X {current.size.width} </h5>
          <MyInput value = {product.size.height}  onChange={e => setProduct({...product, size : {...product.size,height:e.target.value}})} type="text" placeholder="Height"/> 
            <MyInput value = {product.size.width}  onChange={e => setProduct({...product,size :  {...product.size,width:e.target.value}})} type="text" placeholder="Width"/>
          <h5>Weight - {current.weight}</h5>
          <MyInput value = {product.weight}  onChange={e => setProduct({...product,weight:e.target.value})} type="text" placeholder="Weight"/>
          <Commetnts comments = {current.comments}></Commetnts>
          <AddButton  onClick={edit}>Eddit</AddButton>
          <AddButton style={{marginLeft:'5px'}}onClick={cancale}>Cancel</AddButton>
      </form>
    );
};

export default MoreInfo;