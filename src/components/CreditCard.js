import React from "react";
import "./CreditCard.css";

function CreditCard(props) {
  return (
    <div className="body-div">
      <div className="container">
        <h1>{props.bankName}</h1>
        <div className="card-num">
            <p>{props.cardNum.p1}</p>
            <p>{props.cardNum.p2}</p>
            <p>{props.cardNum.p3}</p>
            <p>{props.cardNum.p4}</p>
        </div>
        <p className="num-2">1234</p>
        <div className="expiry">
            <p>VALID <br />THRU</p>
            <p className="expiry-date">{props.expiryDate}</p>
        </div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default CreditCard;
