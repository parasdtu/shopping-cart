import React, { Component } from 'react';
import './App.css';
import BuildControls from './components/checkout/checkout.component';
import Total from './components/total/total.component';

class App extends Component {
  
    constructor(){
        super();
        
      this.state={
        items:[
            {id:9090, name:'item1', label:'item1', price:200, discount:10,type_discount:28.5,
            qty:1,type:"fiction",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
            {id:9091, name:'item2', label:'item2', price:250, discount:15,type_discount:0,
            qty:1,type:"literature",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
            {id:9092, name:'item3', label:'item3', price:320, discount:5,type_discount:0,
            qty:1,type:"literature",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
            {id:9093, name:'item4', label:'item4', price:290, discount:0,type_discount:0,
            qty:1,type:"thriller",disable:false, img_url:"https://place-hold.it/40.jpg"}, 
            
            {id:9094, name:'item5', label:'item5', price:500, discount:25,type_discount:0,
            qty:1,type:"thriller",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
            {id:9095, name:'item6', label:'item6', price:150, discount:5,type_discount:0,
            qty:1,type:"literature",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
            {id:9096, name:'item7', label:'item7', price:700, discount:22,type_discount:0,
            qty:1,type:"literature",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
            {id:9097, name:'item8', label:'item8', price:350, discount:18,type_discount:49.8,
            qty:1,type:"fiction",disable:false, img_url:"https://place-hold.it/40.jpg"},
            
        ],
        totalPrice:2760,
        totalDiscount:100,
        totalTypeDiscount:78.3,
        totalQty:8,
        showNotification: false
        };
        this.addItems= (id)=> {
              const updatedItems= this.state.items.map(item =>{
              if(item.id === id)
              {
                  item.qty++;
                  item.disable= false;
                  
                  this.setState({
                    totalQty: this.state.totalQty +1,
                    totalDiscount: this.state.totalDiscount + item.discount,
                    totalPrice: this.state.totalPrice + item.price,
                    totalTypeDiscount: this.state.totalTypeDiscount + item.type_discount
                    })
              }     
                return item;
            });
              this.setState({
                  items: [].concat(updatedItems),        
              })
        }
          this.removeItems= (id)=> {
              const updatedItems= this.state.items.map(item =>{
                if(item.id === id)
                 {
                       if(item.qty > 0)
                       {
                           item.qty--;
                           this.setState({
                             totalPrice: this.state.totalPrice - item.price,
                             totalQty: this.state.totalQty -1,
                             totalDiscount: this.state.totalDiscount - item.discount,
                             totalTypeDiscount: this.state.totalTypeDiscount - item.type_discount
                            })
                       } 
                       if(item.qty === 0)
                       {
                           item.disable= true;
                       } 
                 }
                   return item;
                });
              
              this.setState({
                  items: [].concat(updatedItems),      
              })
          }
          this.removeWholeItem= (id)=> {
              
              const updatedItems= this.state.items.filter(item =>{
                   
                   if(item.qty > 0 && item.id === id)
                   {
                       this.setState({
                         totalPrice: this.state.totalPrice - item.price*item.qty,
                         totalQty: this.state.totalQty -item.qty,
                         totalDiscount: this.state.totalDiscount - item.discount*item.qty,
                         totalTypeDiscount: this.state.totalTypeDiscount - item.type_discount*item.qty
                        })
                   } 
                   return item.id !== id;
                });
              
              this.setState({
                  items: [].concat(updatedItems),  
                  showNotification: true    
              })
          }
    }
    
    saveStateToLocalStorage() {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
    hydrateStateWithLocalStorage() {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }
    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    
        window.addEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
    }
    
    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
    
        this.saveStateToLocalStorage();
    }
    handleNotification = () => {
        this.setState({
          showNotification: false 
      })
    }

    render(){
      return (
        <div className="main">
        <div className="butn">
            {this.state.showNotification===true ? <div>
              <center> 
                <p className="notification-pointer-needed" >Item Deleted Successfully! 
                  <div onClick={this.handleNotification} style={{cursor: 'pointer', float: 'right'}}> &#10005; </div> 
                </p>
              </center>
              </div>
              : null}
              <center>
                      <p style={{alignContent: 'center'}} className="order-summary"> &#10094;  Order Summary</p>
                </center>
                {/* main container start */}
                <center>
                <div className="row-span">
                <div className="">
                    <div className="butn">
                      <BuildControls 
                        removeItems={this.removeItems} 
                        addItems={this.addItems} 
                        totalPrice={this.state.totalPrice} 
                        totalQty={this.state.totalQty} 
                        items={this.state.items} 
                        removeWholeItem= {this.removeWholeItem} 
                        totalDiscount={this.state.totalDiscount} 
                        totalTypeDiscount={this.state.totalTypeDiscount}
                        showNotification = {this.state.showNotification}
                      />
                    </div>
                  </div>
                  <div className="tottal-contain">
                  {/* <center> */}
                    <Total 
                      totalPrice={this.state.totalPrice} 
                      totalQty={this.state.totalQty} 
                      items={this.state.items} 
                      totalDiscount={this.state.totalDiscount} 
                      totalTypeDiscount={this.state.totalTypeDiscount}
                    />
                    {/* </center> */}
                  </div>
                </div>
                </center>
            </div>
          </div>
      );
  }
}

export default App;
