import { useState } from "react";

export const items = [
  { Id: 1, ProductTitle: "Watch", Quantity: 1, Price: 9370 },
  { Id: 2, ProductTitle: "Shoes", Quantity: 1, Price: 8370 },
  { Id: 3, ProductTitle: "Shirt", Quantity: 1, Price: 7370 },
  { Id: 4, ProductTitle: "Trousers", Quantity: 1, Price: 6370 },
  { Id: 5, ProductTitle: "Hoodie", Quantity: 1, Price: 5370 }
];

export const CartApp = ({ items }) => {
  const [cartDetails, setCartDetails] = useState([]);
  const [enableCheckOut, setEnableCheckOut] = useState(false);
  const [message, setMessage] = useState("");

  const matchingItems = (arr, Id) => {
    return arr.filter((eachItem) => eachItem.Id === Id);
  };

  const AddOrUpdateCart = (itemId) => {
    let tempCart;
    if (matchingItems(cartDetails, itemId).length > 0) {
      tempCart = cartDetails.map((eachItem) => {
        //console.log(eachItem);
        if (eachItem.Id === itemId) {
          return { ...eachItem, Quantity: eachItem.Quantity + 1 };
        } else {
          return eachItem;
        }
      });
    } else {
      const matchingItem = matchingItems(items, itemId)[0];
      cartDetails.push(matchingItem);
      tempCart = [...cartDetails];
    }
    console.log(tempCart);
    setCartDetails(tempCart);
    setEnableCheckOut(true);
  };

  const checkOutHandler = () => {
    let resetList = [];
    if (enableCheckOut) {
      setCartDetails(resetList);
      setMessage("Items CheckedOut");
    } else {
      setMessage("Add Some Items to Checkout");
      //console.log("error");
    }
  };

  return (
    <div>
      <div>
        <b>Item List</b>
        <ul style={{ listStyle: "none" }}>
          {items.map((eachItem, index) => {
            return (
              <li key={index}>
                {eachItem.ProductTitle}
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    border: "1px solid white",
                    marginLeft: "0.7rem"
                  }}
                  onClick={() => AddOrUpdateCart(eachItem.Id)}
                >
                  Add To Cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          <b>Cart List</b>
          {cartDetails.map((eachItem, index) => {
            return (
              <li key={index}>
                <span>Item: {eachItem.ProductTitle}</span>{" "}
                <span>Quantity: {eachItem.Quantity}</span>
              </li>
            );
          })}
        </ul>
        <button onClick={checkOutHandler}>Proceed To CheckOut</button>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Cart App</h1>
      <CartApp items={items} />
    </div>
  );
}
