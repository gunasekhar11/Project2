import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'

interface Props{
  handlePrice: (price: number) => void;
}

const Amount: React.FC<Props> = ({ handlePrice }) =>{
  return (
    <div className="input-price-layout">
    <div>
      <label htmlFor="Price">
        <FaRupeeSign /> Enter Amount
      </label>
      <br />
      <input id="Price" type="number" onChange={(event:any)=>handlePrice(event.target.value)} />
    </div>
  </div>
  )
}

export default Amount