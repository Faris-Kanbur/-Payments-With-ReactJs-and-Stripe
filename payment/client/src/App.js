import { useState } from "react";
import "./App.css";
import shirt from "./assets/shirt.png";
import { StripeContainer } from "./components/StripeContainer";

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App">
      <h1>The T-shirt Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$23.99</h3>
          <div>
            <img src={shirt} alt="shirt" />
            <h1>KAFT: T-Shirts and Design Products</h1>
          </div>
          <button onClick={() => setShowItem(true)}>Purchase T-Shirts</button>
        </>
      )}
    </div>
  );
}

export default App;
