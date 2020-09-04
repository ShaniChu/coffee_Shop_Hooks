import React, {useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import {BillingDetailsFields} from "./BillingDetailsFields";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function PaymentForm() {
  const { showCard, closePayment } = useContext(ProductContext);
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState("true");
  const [clientSecret, setClientSecret] = useState("");
  useEffect (() => {
      //Create a PaymentIntent as soon as the page load
      window.fetch("/create-payment-intent", {
          method:"POST",
          headers:{
              "Content-Type": "application/json"
          },
          body:JSON.stringify({items: [{id: {item}}]})
      })
      .then(res => {
          return res.json();
      })
      .then(data => {
          setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
      style: {
          base: {
              color: "#32325d",
              fontFamily: "Arial, sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder":{
                  color: "#32325d"
              }
          },
          invalid:{
              color:"#fa755a",
              iconColor: "#fa755a"
          }
      }
  }

  const handleChange = async (event) => {
      //Listen for changes in the CardElement
      //and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setProccessing(true);

    //clientSecret of the payment intent that is on the server
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {//payment method
            card: elements.getElement(CardElement),//reference to the cardElement
            billing_details = {
                name: event.target.name.value,
                email: event.target.email.value,
                address: {
                    city: event.target.city.value,
                    line1: event.target.address.value,
                    state: event.target.state.value,
                    postal_code: event.target.zip.value
                }
              }
           }
        });
      
 
//confirm the card payment
    if (payload.error) {
      setError (`Payment failed ${payload.error.message}`)
      setProcessing(false);
    }else{
        setError(null);
        setProccessing(false);
        setSucceeded(true);
    }
  };
 
    return (
      <div className="modal-box payment">
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 items-center text-capitalize"
            >
              <form className="payment-form" id="payment-form" onSubmit={handleSubmit}>
              <form className="Form" onSubmit={handleSubmit}>
                <BillingDetailsFields />
                <CardElement id="card-element" options={cardStyle} onChange={handleChange}/>
                <button id="submit" className="pay" disabled={processing || disabled || succeded}>
                  <span id="button-text">
                      {processing ?(<div className="spinner" id="spinner"></div>) : (
                       "Pay"
                      )}
                  </span>
                </button>
                {/*Show any error that happens when processing the payment*/}
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}
                {/*Show a success message upon completion*/}
                <p className={succeeded ? "result-message" : "result-message hidden"}>
                    Payment succeeded, see the result in your
                    <a href={`http://dashbord.stripe.com/test/payment`}>
                        {""}
                        Stripe dashbord.
                    </a>Refresh the page to pay again.
                </p>
                <Link to="/cart">
                  <button
                    className="btn btn-info my-2 text-capitalize"
                    onClick={closePayment}
                  >
                    go to cart
                  </button>
                </Link>
              </form>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
