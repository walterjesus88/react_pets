// actions/cartActions.js
export const addToCart = (snippet) => {
    return {
      type: 'ADD_TO_CART',
      payload: snippet,
    };
  };
  
  export const removeFromCart = (snippetId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: snippetId,
    };
  };
  