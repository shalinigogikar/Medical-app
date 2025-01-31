import React from "react";
import AddForm from "./AddForm";
const MedicineList=(props)=>
{
    return(
        <div>
<table>
    <thead>
        <th>Medicine</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity Available</th>
    </thead>
    <tbody>
        <th>{props.medicineName}</th>
        <th>{props.Description}</th>
        <th>{props.price}</th>
        <th>{props.QuantityAvailable}</th>
    </tbody>
</table>
</div>);
};
export default MedicineList;