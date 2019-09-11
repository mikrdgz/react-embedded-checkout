import React from 'react';
import './App.css';
import {createCheckoutService} from '@bigcommerce/checkout-sdk'
import {embedCheckout} from '@bigcommerce/checkout-sdk'

const service = createCheckoutService();



class App extends React.Component {
componentDidMount(){
  embedCheckout({
    "containerId": "bc-embedded-checkout",
    "url": "https://mikaelarodriguez.com/cart.php?embedded=1&action=loadInCheckout&id=cf2f0b41-7b47-4066-aea3-0a4f507de39f&token=99b402fb18df95139db23baf9226502cd5da1f509065deb75d658e1c8a1b64c9",
    "styles": {
      "button": {
        "backgroundColor": "#ffffff",
        "borderColor": "#000000",
        "color": "#000000"
      }
    }
  })
 }
 render(){
   return <h1>BC SDK</h1>
 }
}

export default App;
