import React, { useState } from 'react'
import Form from './Form'


function Payment() {
   const[pay,setPay]=useState(true)
    function handlepay(){
        setPay(!pay);
        alert("Your Payment is successful Now you can enjoy the class..")
    }
    var date = new Date();
    date.setDate(date.getDate() + 30);
    var dateString  = date.toISOString().split('T')[0];
    if(pay){
        return (
            <div className="container text-center">
                <h5>
                  The fees of the class is 500 RS. and you can pay this fees in
                  anytime in month before {dateString}.
                </h5>
                <button className="btn btn-primary" onClick={handlepay}>Pay Now</button>
            </div>
        )
    }
    else{
        return(
            <Form/>
        )
    }
   
}

export default Payment
