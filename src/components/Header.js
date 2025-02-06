import React,{useContext, useState}from "react";
import BillContext from "./BillContext";
import classes from "./Header.module.css";
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
    <header className={classes.header}>
        <h1 className={classes.title}>Medical Shop With Stock Management</h1>
        <button className={classes.buttonHeader} onClick={cartHandler}>Cart has {bill.length} medicines </button>
        {showCart&&(
            <div className={classes.cartContainer}>
                {bill.length===0?(
                    <p>Cart is empty</p>
                ):(
                    bill.map((med,index) => (
            <div key={index}>
                <p>
                    {med.medicineName}-Rs/-{med.price}
                </p>
            </div>
        ))
        )}
        <p className={classes.totalAmount}>Total={totalAmount}</p>
        <button onClick={cartHandler}>Close</button>
        </div>)}
    </header>
);
};
export default Header;