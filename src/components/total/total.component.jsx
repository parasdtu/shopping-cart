import React from 'react';
import '../total/total.component.css';

const Total =(props)=> {
    
    let order_total='$', totalPrice='$', totalDiscount='$', totalTypeDiscount='$';
    if(props.totalQty!==0){
        totalPrice+= props.totalPrice+'.00 ';
        totalDiscount+= props.totalDiscount +'.00 ';
        totalTypeDiscount+= props.totalTypeDiscount.toFixed(2);
        order_total+= (props.totalPrice-props.totalDiscount-props.totalTypeDiscount).toFixed(2);
    }else{
        totalPrice+= '0.00';
        totalDiscount+= '0.00';
        totalTypeDiscount+= '0.00';
        order_total+= '0.00';
    }
    
 
    return (
        <center>
        <div className="total-body">
            <div className="butn">
            <b className="total">Total</b>
            
            <hr/>
            
                <p className="daddy-total ">Items({props.totalQty})&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{totalPrice}</p>
                <p className="total">Discount&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-{totalDiscount}</p>
                <p className="total">Type discount&emsp;:&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;-{totalTypeDiscount}</p>
            
            <hr/>
            <div class="cal-grid-order-total">
                <div class="g span-two-total order-bold"><b>Order total</b>:&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_total}</div>
                {/* <p className="total"><b>Order total</b>:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_total}</p> */}
                {/* <div class="g">2</div> */}
            </div>
        </div>
        </div>
        </center>
       )
       
}

export default Total;