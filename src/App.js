import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createCheckoutService} from '@bigcommerce/checkout-sdk'

const service = createCheckoutService();


embedCheckout({
  "containerId": "bc-embedded-checkout",
  "url": "https://mikaelarodriguez.com/cart.php?embedded=1&action=loadInCheckout&id=c9559566-9c2d-470e-9ff3-62feb6cc70b5&token=c10526531c996fb90ec910ccc21aa175f6ba4319d77bcda77f8f118fd81183d2",
  "styles": {
    "button": {
      "backgroundColor": "#ffffff",
      "borderColor": "#000000",
      "color": "#000000"
    }
  }
});


function App() {
  return (
    <div id="bc-embedded-checkout"></div>
  );
}

export default App;
