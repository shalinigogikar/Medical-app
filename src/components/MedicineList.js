import React,{useContext, useState}from "react";
import BillContext from "./BillContext";
import AddForm from "./AddForm";
const MedicineList=()=>
{
    const {bill,setBill}=useContext(BillContext);
    const [medilist,setMediList]=useState([]);
    const addMedicineHandler=(medicine)=>{
        setMediList((prevMedicines) => [...prevMedicines, medicine]);
  };
  const addToBillHandler=(med)=>{
            if(med.quantityAvailable>0)
            {
                const updatedMedicine={...med,quantityAvailable:med.quantityAvailable-1};
                setMediList((prevMedicines)=>
                    prevMedicines.map((medicine)=>
                        medicine.medicineName===updatedMedicine.medicineName?updatedMedicine:medicine
            ));
                setBill((prevBill)=>[...prevBill,updatedMedicine]);

        }
    };
    let totalAmount = 0;
for (let i = 0; i < bill.length; i++) {
  totalAmount += Number(bill[i].price);
}
    return(
        <div>
            <AddForm onAddMedicine={addMedicineHandler}/>
<table>
    <thead>
        <tr>
        <th>Medicine</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity Available</th>
        </tr>
    </thead>
    <tbody>
    {medilist.map((med, index) => (
        <tr key={index}>
        <td>{med.medicineName}</td>
        <td>{med.description}</td>
        <td>{med.price}</td>
        <td>{med.quantityAvailable}</td>
        <td>
            <button onClick={()=>addToBillHandler(med)} disabled={med.quantityAvailable===0}>{med.quantityAvailable===0?"Out Of Stock":"Add To Bill"}</button>
        </td>
        </tr>
        ))}
    </tbody>
</table>
</div>
);
};
export default MedicineList;