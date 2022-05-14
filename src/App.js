import React, { useMemo, useState } from "react";
import ProductForm from "./components/ProductForm";
import AddButton from "./components/UI/Button/AddButton";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import { useDispatch } from "react-redux";
import { AlphabeticallySort, DProduct } from "./features/addProductSlice";
import Sorter from "./components/UI/Select/Sorter";
import { CounSort } from "./features/addProductSlice";
import "./styles/App.css";
import MoreInfo from "./components/MoreInfoCom";

function App() {
  const [visible,setVisible] = useState(false);
  const [visible1,setVisible1] = useState(false);

  const current = useSelector((state) => state.Product.currenItem);

  function controlWindow(){
    setVisible(false)
    setVisible1(false)
  }

  const products = useSelector((state) => state.Product.products);
  const ProductControler = useDispatch();
  function deleteProduct(Product) {
    const a = window.confirm("Are you sure?")
    if (a){
      ProductControler(DProduct(Product));
    }
  }

  function SortControle(value) {
    console.log(value)
    if(value === 'name'){
      ProductControler(AlphabeticallySort());
    }else if (value === 'weight'){
      ProductControler(AlphabeticallySort());
    }else if (value === 'count'){
      ProductControler(CounSort());
    }
    
  }

  return (
    <div className="App">
      <ModalWindow visible={visible1} setVisible={setVisible1}>
        {current !== '' ? <MoreInfo create={controlWindow} ></MoreInfo> : <div></div>}
      </ModalWindow>
      <AddButton style={{marginTop:'10px'}} onClick={() => setVisible(true)}>
        Add Product
      </AddButton>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <ProductForm create={controlWindow}/>
      </ModalWindow>
      <hr style={{margin:"15px 0"}}></hr>
      <Sorter sort={SortControle}/> 
      {products.length !== 0 ?  <ProductList setVisible={setVisible1} remove={deleteProduct} products={products} groupName="Products"/> : <h1 style={{textAlign:"center",marginTop:"150px"}}>Products not found</h1> }
    </div>
  );
}

export default App;
