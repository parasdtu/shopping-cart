import React from 'react';
import '../display-items/display-items.component.css';

const BuildControl =(props)=> {
    
    return (   
        <tr>
          <td className= "Label">
          <div className="cal-grid">
            <div className="g"><img src="https://place-hold.it/40.jpg" alt="abc" width="auto" height="auto" /></div>
            <p className="g span-two">{props.label}</p>
            <p className="pointer-needed" onClick={props.removeWholeItem}>&#10005;</p>
          </div>
          </td>

          {/* <td><p className="pointer-needed" onClick={props.removeWholeItem}>&#10005;</p></td> */}
          <td><p disabled={props.disable} className="pointer-needed-dingbat" onClick={props.removeItems}>&#8722;</p></td>
          <td style={{textAlign: 'center'}}>
            <div className="cal-grid-qty">
            {props.qty}
            </div>
          </td>
          <td> <p className="pointer-needed-dingbat" onClick={props.addItems}>&#43;</p></td>
          <td style={{textAlign: 'center'}} className="price"> ${props.price} </td>
        </tr>
       )

    
}

export default BuildControl;