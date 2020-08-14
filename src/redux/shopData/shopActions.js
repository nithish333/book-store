const { default: SHOP_ACTION_TYPES } = require("./shopActionTypes");

export const handleInputChange = (input) => ({
  type: SHOP_ACTION_TYPES.HANDLE_INPUT_CHANGE,
  payload: input,
});
