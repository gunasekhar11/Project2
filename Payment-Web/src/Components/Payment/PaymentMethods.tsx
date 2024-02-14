import React from 'react'
import { AiFillCreditCard } from 'react-icons/ai'
import { BiSolidLockAlt } from 'react-icons/bi'
import { BsFillCalendarMinusFill } from 'react-icons/bs'

const PaymentMethods = () => {
  return (
    <div className="payment-method-layout">
    <div className="form-check">
      <div className="each">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <div>
          <p>Pay on Delivery </p>
          <p className="subtitle">Pay with cash on delivery</p>
        </div>
      </div>
      <div className="each">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <div>
          <p>Credit/Debit Cards</p>
          <p className="subtitle">Pay with your Credit / Debit Card</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Card Number"
            />
            <span className="input-group-text" id="basic-addon2">
              <AiFillCreditCard />
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="MM / YY"
            />
            <span className="input-group-text">
              <BsFillCalendarMinusFill />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="CVV"
            />
            <span className="input-group-text">
              <BiSolidLockAlt />
            </span>
          </div>
        </div>
      </div>
      <div className="each">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <div>
          <p> Direct Bank Transfer </p>
          <p className="subtitle"> Make payment directly through bank account. </p>
        </div>
      </div>
      <div className="each">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <div>
          <p> Other Payment Methods </p>
          <p className="subtitle"> Make payment through Gpay, Paypal, Paytm etc </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentMethods