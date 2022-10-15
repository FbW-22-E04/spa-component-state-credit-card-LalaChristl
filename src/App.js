import React from "react"
import CreditCard from "./components/CreditCard";

function App() {
  const bankName = 'Big Bank, Inc.'
  const cardNum = {
    p1: 1234,
    p2: 5678,
    p3: 8765,
    p4: 4321,
  }
  const expiryDate = '08/19'
  const name = 'LALA C.'



  return (
    <div>
 <CreditCard bankName = {bankName} cardNum = {cardNum} expiryDate = {expiryDate} name = {name}/>
    </div>
  );
}

export default App;
