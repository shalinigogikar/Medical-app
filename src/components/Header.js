import React,{useContext, useState}from "react";
import BillContext from "./BillContext";
const Header=()=>{
    const {bill}=useContext(BillContext);
    const[showCart,setShowCart]=useState(false);
    const cartHandler=()=>
    {
        setShowCart((prevBill)=>!prevBill);
    }
    let totalAmount = 0;
for (let i = 0; i < bill.length; i++) {
  totalAmount += Number(bill[i].price);
}
return(
    <div>
        <h1>Medical Shop With Stock Management</h1>
        <button onClick={cartHandler}>Cart has {bill.length} medicines </button>
        {showCart&&(
            <div>
                {bill.length===0?(
                    <p>Cart is empty</p>
                ):(
                    bill.map((med,index) => (
            <div key={index}>
                <p>
                    {med.medicineName}-{med.price}
                </p>
            </div>
        
        ))
        )}
        <p>Total={totalAmount}</p>
        </div>)}
    </div>
);
};
export default Header;