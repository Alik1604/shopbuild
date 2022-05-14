import React from 'react';
import AddButton from './UI/Button/AddButton';
import classes from "./styles/ProductItem.module.css"
import { useDispatch } from 'react-redux';
import { SetCurrentItem } from '../features/addProductSlice';

const ProductItem = (props) => {
    const setter = useDispatch();
    function moreInfo(product){
        props.setV(true);
        setter(SetCurrentItem(product));
    }

    return (
        <div className="studentContainer">
            <div className="studentInfo">
                <strong>{props.number}.{props.product.name}</strong>
                <div className="student_info">URL: {props.product.imageUrl}</div>
                <div className="student_info">Count: {props.product.count}</div>
                <div className="student_info">Heigt: {props.product.size.height}</div>
                <div className="student_info">Width: {props.product.size.width}</div> 
                <div className="student_info">Weight: {props.product.weight}</div>
            </div>
            <div className={classes.opButtons}>
                <AddButton onClick={()=> props.remove(props.product)} className="kill_student">Delete</AddButton>
                <AddButton onClick={()=> {moreInfo(props.product)}} className="kill_student">More info</AddButton>
            </div>
        </div>
    );
};

export default ProductItem;