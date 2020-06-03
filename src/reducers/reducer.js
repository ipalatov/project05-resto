
const initialState = {
    menu: [],
    loading: true,
    error: false


}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return { menu: action.payload, loading: false };
        case 'MENU_REQUESTED':
            return { ...state, loading: true };
        case 'MENU_REQUEST_ERROR':
            return { ...state, loading: true, error: true };
        default:
            return state;
    }
}

export default reducer;