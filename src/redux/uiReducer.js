// uiReducer.js
const initialState = {
    isDarkMode: false,  // Default value (false or true based on your app's theme preference)
  };
  
  export default function uiReducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return {
          ...state,
          isDarkMode: !state.isDarkMode,  // Toggle dark mode state
        };
      default:
        return state;
    }
  }
  