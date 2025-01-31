import React,{useState} from "react";
const AddForm=()=>{
 const [medicine,setMedicine]=useState({
    medicineName: "",
    description: "",
    price: "",
    quantityAvailable: "",
 });
    const addFormHandler=(event)=>{
        event.preventDefault();
        setMedicine(event.target.value);
    }
    return(
        <form>
            <div>
                <label htmlFor="medicine">medicineName</label>
                <input type="text" id="medicine"/>
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <input type="text" id="desc"/>
            </div>
            <div>
                <label htmlFor="amount">price</label>
                <input type="number" id="amount"/>
            </div>
            <div>
                <label htmlFor="quantity">QuantityAvailable</label>
                <input type="number" id="quantity"/>
            </div>
            <div>
                <button type="submit" onClick={addFormHandler}>Add</button>
            </div>
        </form>
    );
};
export default AddForm;