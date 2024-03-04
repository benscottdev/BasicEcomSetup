import Header from "../Components/Header";
import { v4 as uuidv4 } from "uuid";

function Store({ cartItems, setCartItems }) {
  const itemsArray = [
    {
      product: "Chair",
      price: 54.95,
      img: "",
      id: uuidv4(),
    },
    {
      product: "Table",
      price: 219.95,
      img: "",
      id: uuidv4(),
    },
    {
      product: "Pillow",
      price: 49.95,
      img: "",
      id: uuidv4(),
    },
    {
      product: "Closet",
      price: 132.95,
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
            {/* <img src={item.img} alt="" /> */}
            <h2>${item.price}</h2>
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Store;
