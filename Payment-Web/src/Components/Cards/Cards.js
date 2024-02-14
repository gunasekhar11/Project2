import React, { useState } from 'react';
import creditcard from '../Assets/credit-card.png'
import './Cards.css';

const Cards = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCardNumber(value);
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/[^0-9/]/g, '');
    setExpiry(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCvv(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.length !== 16 || cvv.length !== 3) {
      alert('Invalid input. Please check your card details.');
    } else {
      alert('Payment successful!');
    }
  };

  return (
    <div>
    <div className='card-image'>
      <img src={creditcard} style={{width:"100%",height:"100%",position:"relative",zIndex:"-1"}}></img>
    </div>
    <div className="payment-form">
      <h2 cla>Add Credit Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <input
          type="text"
          placeholder="Expiry (MM/YY)"
          value={expiry}
          onChange={handleExpiryChange}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={handleCvvChange}
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
    </div>
  );
};

export default Cards;
