import Header from "../Components/Header";

function Cart({ cartItems, setCartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += Number(item.price);
    });
    return total;
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cartPage">
      <Header />
      <div className="cartItems">
        {cartItems.map((item, index) => (
          <div className="cartProduct" key={index}>
            <h1>{item.product}</h1>
            <h2>${item.price}</h2>
            {/* <img src={item.img} alt={item.product} /> */}
            <button onClick={() => removeItem(item.id)}>X</button>
          </div>
        ))}
        <div className="totalPrice">
          <h1>Subtotal: ${getTotalPrice().toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
}
export default Cart;
