// actions/cartActions.js
// export const addToCart = (snippet) => {
//     return {
//       type: 'ADD_TO_CART',
//       payload: snippet,
//     };
//   };
  
//   export const removeFromCart = (snippetId) => {
//     return {
//       type: 'REMOVE_FROM_CART',
//       payload: snippetId,
//     };
//   };
  

// actions/cartActions.js
export const addToCart = (item) => (dispatch, getState) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  
    // Guardar en localStorage después de actualizar el carrito
    const { cart } = getState();
    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
  };
  
  export const removeFromCart = (item) => (dispatch, getState) => {
    console.log(item)
    console.log(getState)
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  
    // Guardar en localStorage después de actualizar el carrito
    const { cart } = getState();
    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems));
  };
  