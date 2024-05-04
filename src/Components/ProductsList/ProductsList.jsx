import React from "react";
import Item from "../Item/Item";

const ProductsList = ({setProductDetail,productdetail,setCartCount,cartcount}) => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productdetail.map((element,index)=>{
                     return(
                    <div key={index}>
                     <Item index={index} element={element} setCartCount={setCartCount} cartcount={cartcount}/>
                     </div>
                     )
            })}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
