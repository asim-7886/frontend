import React, { useContext } from 'react'
import { Context } from "../../utils/context";
import CartItem from "../Cart/CartItem/CartItem";

function CheckOut() {

    const { cartItems, cartSubTotal } = useContext(Context);


  return (
    <div>
      
        {console.log(cartItems)}
         {!!cartItems.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                   
                                >
                                   PAYOUT
                                </button>
                            </div>
                        </div>
                    </>
                )}
    </div>
  )
}

export default CheckOut