import React from "react";
import Header from "./components/Header";
import MedicineList from "./components/MedicineList";
import BillProvider from "./components/BillProvider";
function App() {

  return (
    <BillProvider>
    <Header/>
    <MedicineList/>
    </BillProvider>
  );
}

export default App;
