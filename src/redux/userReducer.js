const initialState = {
        users: [],
    };
    
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload
                        ? { ...user, completed: !user.completed }
                        : user
                ),
            };

        case 'DELETE_USER':    
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };

        default:
            return state;
    }
};

export default userReducer; 