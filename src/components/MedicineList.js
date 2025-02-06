import React,{useContext, useState}from "react";
import BillContext from "./BillContext";
import AddForm from "./AddForm";
import classes from "./MedicineList.module.css";
const MedicineList=()=>
{
    const {setBill}=useContext(BillContext);
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
    return(
        <div className={classes.container}>
            <AddForm onAddMedicine={addMedicineHandler}/>
<table className={classes.table}>
    <thead className={classes.tableHead}>
        <tr>
        <th className={classes.th}>Medicine</th>
        <th className={classes.th}>Description</th>
        <th className={classes.th}>Price</th>
        <th className={classes.th}>Quantity Available</th>
        </tr>
    </thead>
    <tbody>
    {medilist.map((med, index) => (
        <tr key={index} className={classes.tableRowHover}>
        <td className={classes.td}>{med.medicineName}</td>
        <td className={classes.td}>{med.description}</td>
        <td className={classes.td}>{med.price}</td>
        <td className={classes.td}>{med.quantityAvailable}</td>
        <td>
            <button
             className={
                med.quantityAvailable === 0
                  ? classes.buttonOutOfStock
                  : classes.button
              }
               onClick={()=>addToBillHandler(med)} disabled={med.quantityAvailable===0}>{med.quantityAvailable===0?"Out Of Stock":"Add To Bill"}</button>
        </td>
        </tr>
        ))}
    </tbody>
</table>
</div>
);
};
export default MedicineList;