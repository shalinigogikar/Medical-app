import React,{useState} from "react";
import BillContext from "./BillContext";
const BillProvider=({children})=>{
    const [bill,setBill]=useState([]);
return(
    <BillContext.Provider value={{bill,setBill}}>
        {children}
    </BillContext.Provider>
);
};
export default BillProvider;