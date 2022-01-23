import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51HyzzvGJ2jN3S4ckPILAxz0YfeBvBwFVOYRnxoPOYjwIlsgSlldtZFrj6CidYYDllzEkJNPvepYQy0JrghtIzU6Z0096DxmHZu";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>
  );
};
