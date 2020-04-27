const initialState = {
  addresses: [],
  loading: false
};
export default function addresses(state = initialState, action) {
  switch (action.type) {
    case "LOADING_ADDRESSES": {
      return { ...state, loading: true };
    }
    case "ADDRESSES_SUCCESS": {
      return {
        ...state,
        loading: false,
        addresses: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
