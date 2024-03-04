import Header from "../Components/Header";
import { v4 as uuidv4 } from "uuid";

function Store({ cartItems, setCartItems }) {
  const itemsArray = [
    {
      product: "item 1",
      price: 14.99,
      img: "",
      id: uuidv4(),
    },
    {
      product: "item 2",
      price: 22.99,
      img: "",
      id: uuidv4(),
    },
    {
      product: "item 3",
      price: 114.99,
      img: "",
      id: uuidv4(),
    },
    {
      product: "item 4",
      price: 32.99,
      img: "",
      id: uuidv4(),
    },
  ];

  const addItem = (item) => {
    setCartItems([
      ...cartItems,
      { product: item.product, price: item.price, id: item.id },
    ]);
    console.log(cartItems);
  };

  return (
    <div className="storePage">
      <Header />
      <div className="mappedProducts">
        {itemsArray.map((item, index) => (
          <div className="storeProduct" key={index}>
            <h1>{item.product}</h1>
            <img src={item.img} alt="" />
            <h2>${item.price}</h2>
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Store;
