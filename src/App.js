import React from 'react';
import './App.css';
import {createCheckoutService} from '@bigcommerce/checkout-sdk'
import {embedCheckout} from '@bigcommerce/checkout-sdk'

const service = createCheckoutService();


class App extends React.Component {
componentDidMount(){
  embedCheckout({
    "containerId": "bc-embedded-checkout",
    "url": "https://mikaelarodriguez.com/cart.php?embedded=1&action=loadInCheckout&id=9a988ee4-be1e-4fbd-9e3c-5cc32df42cbd&token=bccc9a5e9691a7d30267a3188c238d7a22d2d9685734e926cf4c261f7c83de13",
    "styles": {
      "button": {
        "backgroundColor": "#ffffff",
        "borderColor": "#000000",
        "color": "#000000"
      }
    }
  })
 }
 
}

export default App;
