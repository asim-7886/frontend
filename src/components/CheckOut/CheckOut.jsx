import React, { useContext, useState } from "react";
import "./checkout.scss";
import { Context } from "../../utils/context";
import CartItem from "../Cart/CartItem/CartItem";

function CheckOut() {
  const { cartItems, cartSubTotal } = useContext(Context);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    cardholder: "",
    cardnumber: "",
    expiredate: "",
    cvv: "",
  });

  const [validated, setValidated] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("process.env.REACT_APP_STRIPE_APP_DEV_URLapi/submit-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Form submitted successfully
        const responseData = await response.json();
        console.log("Form submitted successfully", responseData);
        
        // Set validated to true only when the form is submitted successfully
        setValidated(true);
        // Add any success handling here (e.g., redirect)
      } else {
        console.error("Form submission failed", response.status, response.statusText);
  
        // Handle errors (e.g., show an error message to the user)
        try {
          const responseBody = await response.text();
  
          if (responseBody) {
            const errorData = JSON.parse(responseBody);
  
            if (errorData.error && errorData.error.name === "ValidationError") {
              // Handle validation errors more gracefully
              console.error("Validation errors:", errorData.error.details);
              // You can now display these validation errors to the user
            } else {
              // Handle other types of errors
              console.error("Other error:", errorData);
            }
          } else {
            console.error("Empty response body");
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
  
        // Set validated to false when there's an error
        setValidated(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
  
      // Set validated to false when there's an error
      setValidated(false);
    }
  };
  
  return (
    <div className="maincontainer my-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
                {cartItems.length}
              </span>
            </h4>
            {!!cartItems.length && (
              <>
                <CartItem />
                <hr className="my-4" />
                <div className="cart-footer">
                  <div className="subtotal mt-3 d-flex justify-content-between">
                    <strong className="text">Subtotal: </strong>
                    <strong className="text total">RS:{cartSubTotal}</strong>
                  </div>
                </div>
              </>
            )}
            <form className="card my-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
            <hr className="my-4" />
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              onSubmit={formSubmitHandler}
              noValidate
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    onChange={handleInputChange}
                    value={formData.firstName}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    onChange={handleInputChange}
                    value={formData.lastName}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="email">email</label>
                  <input
                    type="mail"
                    className={`form-control ${
                      validated && !formData.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="address">address</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.address ? "is-invalid" : ""
                    }`}
                    id="address"
                    onChange={handleInputChange}
                    value={formData.address}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="address2">address2</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.address2 ? "is-invalid" : ""
                    }`}
                    id="address2"
                    onChange={handleInputChange}
                    value={formData.address2}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">country</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.country ? "is-invalid" : ""
                    }`}
                    id="country"
                    onChange={handleInputChange}
                    value={formData.country}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="state">state</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.state ? "is-invalid" : ""
                    }`}
                    id="state"
                    onChange={handleInputChange}
                    value={formData.state}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">zip</label>
                  <input
                    type="number"
                    className={`form-control ${
                      validated && !formData.zip ? "is-invalid" : ""
                    }`}
                    id="zip"
                    onChange={handleInputChange}
                    value={formData.zip}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              {/* Add similar input fields for other form fields */}
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cardholder">cardholder</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.cardholder ? "is-invalid" : ""
                    }`}
                    id="cardholder"
                    onChange={handleInputChange}
                    value={formData.cardholder}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cardnumber">cardnumber</label>
                  <input
                    type="number"
                    className={`form-control ${
                      validated && !formData.cardnumber ? "is-invalid" : ""
                    }`}
                    id="cardnumber"
                    onChange={handleInputChange}
                    value={formData.cardnumber}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="expiredate">expiredate</label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && !formData.expiredate ? "is-invalid" : ""
                    }`}
                    id="expiredate"
                    onChange={handleInputChange}
                    value={formData.expiredate}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cvv">cvv</label>
                  <input
                    type="number"
                    className={`form-control ${
                      validated && !formData.cvv ? "is-invalid" : ""
                    }`}
                    id="cvv"
                    onChange={handleInputChange}
                    value={formData.cvv}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                </div>
              <button
                className="btn btn-primary btn-lg btn-block d-flex mx-auto"
                type="submit"
                // onClick={setValidated(true)}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
