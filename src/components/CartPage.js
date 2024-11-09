// /components/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    // Acción para eliminar el artículo del carrito
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleCheckout = () => {
    // Lógica para proceder al pago (checkout)
    console.log('Procediendo al checkout...');
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p>Total de artículos: {cartItems.length}</p>
          <p>Total a pagar: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
          <button onClick={handleCheckout}>Proceder al Pago</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
