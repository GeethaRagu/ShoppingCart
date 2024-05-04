import React, { useState } from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ProductsList from './Components/ProductsList/ProductsList';

const App = () => {

const products = [ //products array of objects
  {
    id: 1,
    name: "Kitchenwell Multi-Purpose Trolley",
    price: "$40.00 - $80.00",
    desc : "Kitchenwell Multi-Purpose Trolley Storage Organizer and Kitchen Accessories Items for Kitchen Storage Rack Square Design Fruits & Vegetable Onion Cutlery"
  },
  {
    id: 2,
    name: "Clazkit Food Strainer",
    price: "$80.00",
    desc:"Clazkit Food Strainer Colander, Fruit Basket, Pasta Strainer, Vegetable Strainer, Kitchen Sieve, Washing Bowl, Unbreakable"

  },
  {
    id: 3,
    name: "Pigeon by Stovekraft Angular Holder Shears Kitchen Knifes ",
    price: "$40.00",
    desc :"Pigeon by Stovekraft Angular Holder Shears Kitchen Knifes 6 Piece Set with Wooden Block "

  },
  {
    id: 4,
    name: "Double layer Soap Dispenser",
    price: "$20.00 - $50.00",
    desc:"Double layer Soap Dispenser for Bathroom Accessories Dishwasher Liquid Holder Liquid Dispenser Pump with Sponge Holder"
  },
  {
    id: 5,
    name: "hago Fridge Storage Boxes Freezer Storage Containers",
    price: "$40.00 - $80.00",
    desc:"hago Fridge Storage Boxes Freezer Storage Containers, Container for Kitchen Storage Set, Storage in Kitchen, Vegetable Storage"
  },
  {
    id: 6,
    name: "Kuber Industries Cutting Board",
    price: "$44.00",
    desc:"Kuber Industries Cutting Board|Wooden Slicing & Kitchen Chopping Board with Steel Hook for Hanging Fruits,Vegetables"

  },
  {
    id: 7,
    name: "Dish Drying Mat",
    price: "$60.00",
    desc:"Dish Drying Mat for Kitchen Drying mat for Kitchen Utensils Water Absorbent mat Large Dry mat for Kitchen Utensils"
  },
  {
    id: 8,
    name: "KNIFEPLANET Knife Sharpener",
    price: "$20.00",
    desc:"KNIFEPLANET Knife Sharpener Sharpener Tool Advanced Knife Sharpener for Kitchen Knife Sharpener Rod Knife Sharpner"
  },
  ]
  const [productdetail,setProductDetail] = useState(products); //value set to send to productlist page

  const [cartcount,setCartCount] = useState(0); //set cart counter to 0
  return (
    <>
      <NavBar setCartCount={setCartCount} cartcount={cartcount}/>   
      <Header/>
      <ProductsList setProductDetail={setProductDetail} productdetail={productdetail} setCartCount={setCartCount} cartcount={cartcount}/>
      <Footer />
    </>
  );
};

export default App;