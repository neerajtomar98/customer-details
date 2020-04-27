const initialState = {
  userList: [],
  loading: false
};
export default function users(state = initialState, action) {
  switch (action.type) {
    case "LOADING_USERLIST": {
      return { ...state, loading: true };
    }

    case "USERLIST_SUCCESS": {
      return {
        ...state,
        loading: false,
        userList: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
