 // Action creators
 export const addUser = (text) => ({
    type: 'ADD_USER',
    payload: { id: Date.now(), text, completed: false },
  });
  
  export const toggleUser = (id) => ({
    type: 'TOGGLE_USER',
    payload: id,
  });
  
  export const deleteUser = (id) => ({
    type: 'DELETE_USER',
    payload: id,
  });
  