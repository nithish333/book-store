const { default: USER_ACTION_TYPES } = require("./userActionTypes");

const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
