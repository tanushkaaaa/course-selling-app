import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51OyB5mSAzKN1RgjbCrRVWhhRcbpTtyX3J7JRxJPG6G2YOgzEeM9iGh9aJXG5jIy6sfLMMy9eC61h0YnoPNzkpYid004J5fzURk");

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
