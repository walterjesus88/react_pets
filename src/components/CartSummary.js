import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6">
      <p>{totalItems} artículos en el carrito</p>
      <p>Total: ${totalPrice}</p>
      <button onClick={() => navigate('/cart')} className="bg-red-500 py-2 px-4 rounded">Ir al carrito</button>
    </div>
  );
};


export default CartSummary;