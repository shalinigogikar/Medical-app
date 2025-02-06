import React,{useState} from "react";
import classes from "./AddForm.module.css";
const AddForm=(props)=>{
 const [medicine,setMedicine]=useState({
   medicineName: "",
   description: "",
    price: "",
    quantityAvailable: "",
 });
 const medicineNameChangeHandler=(event)=>
    {
        setMedicine((prevState)=>{
            return{
                ...prevState,medicineName:event.target.value};
            });
    };
    const descriptionChangeHandler=(event)=>
        {
            setMedicine((prevState)=>{
                return{
                    ...prevState,description:event.target.value};
                });
        };
        const priceChangeHandler=(event)=>
            {
                setMedicine((prevState)=>{
                    return{
                        ...prevState,price:event.target.value};
                    });
            };
            const quantityAvailableChangeHandler=(event)=>
                {
                    setMedicine((prevState)=>{
                        return{
                            ...prevState,quantityAvailable:event.target.value};
                        });
                };
    const submitFormHandler=(event)=>{
        event.preventDefault();
        props.onAddMedicine(medicine);
        setMedicine({
            medicineName:'',
            description:'',
            price:'',
            quantityAvailable:'',
        });
    };
    return(
        <form onSubmit={submitFormHandler} className={classes.form}>
            <div className={classes['form-group']}>
                <label htmlFor="medicine">medicineName</label>
                <input type="text" value={medicine.medicineName} id="medicine" onChange={medicineNameChangeHandler}/>
            </div>
            <div className={classes['form-group']}>
                <label htmlFor="desc">Description</label>
                <input type="text" value={medicine.description} id="desc"onChange={descriptionChangeHandler}/>
            </div>
            <div className={classes['form-group']}>
                <label htmlFor="amount">price</label>
                <input type="number" value={medicine.price} id="amount" onChange={priceChangeHandler}/>
            </div>
            <div className={classes['form-group']}>
                <label htmlFor="quantity">QuantityAvailable</label>
                <input type="number" value={medicine.quantityAvailable}id="quantity" onChange={quantityAvailableChangeHandler}/>
            </div>
            <div className={classes['form-actions']}>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};
export default AddForm;