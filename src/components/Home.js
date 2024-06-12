import React from 'react'
import  mobile from ".././images/mobiles.png"
import cart from ".././images/cart.png"

const Home = () => {
  return (
    <div>
        <img src={cart} width={150} height={150} />
      <h2>Home Component</h2>
      <div className='card-wrapper'>
        <div>
          <img src={mobile} width={200} height={250}/>
        </div>
        <span>
            Motorola Mobile
        </span>
        <span>
            Price : Rs. 15000
        </span>
        <div>
            <button>Add to cart</button>
        </div>
       
       </div>
    </div>
  )
}

export default Home
