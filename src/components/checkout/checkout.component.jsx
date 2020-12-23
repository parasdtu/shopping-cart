import React from 'react';
import '../checkout/checkout.component.css';
import BuildControl from '../display-items/display-items.component.jsx';


const BuildControls =(props)=> {

    return (
        
        // <div className= "BuildControls">
        
        <table className="items-table">
              
    
        <thead>
            <tr>
              <th scope="col" style={{textAlign: 'left'}}>Items({props.totalQty})</th>
              <th scope="col" ></th>
              {/* <th scope="col" >    </th> */}
              <th scope="col" >Qty</th>
              <th scope="col" >    </th>
              <th scope="col" >Price</th>
            </tr>
        </thead>

        <tbody>
        {props.items.map(item =>
              <BuildControl
                key={item.id}
                label={item.label}
                addItems={() =>props.addItems(item.id)}
                removeItems={() =>props.removeItems(item.id)} 
                disable={item.disable}
                qty={item.qty}
                price={item.price} 
                discount={item.discount}
                type_discount={item.type_discount}
                removeWholeItem={() =>props.removeWholeItem(item.id)}  
              />
       )}
       </tbody>

       </table>

        // </div>
    );
}

export default BuildControls;