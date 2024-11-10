// reducers/cartReducer.js
// const initialState = {
//     cartItems: [],
    
//   };

  const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  };


  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.id === item.id);
  
        if (existItem) {
          // Si el artículo ya existe, incrementa la cantidad
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.id === existItem.id ? { ...x, quantity: x.quantity + 1 } : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        console.log(action.payload);
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload],
//         };
//       case 'REMOVE_FROM_CART':
//         return {
//           ...state,
//           cartItems: state.cartItems.filter(item => item.id !== action.payload),
//         };
//       default:
//         return state;
//     }
//   };
  
  export default cartReducer;
  