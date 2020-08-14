const { default: SHOP_ACTION_TYPES } = require("./shopActionTypes");

export const handleInputChange = (input) => ({
  type: SHOP_ACTION_TYPES.HANDLE_INPUT_CHANGE,
  payload: input,
});

export const handleCategoryChange = (categoryChange) => ({
  type: SHOP_ACTION_TYPES.HANDLE_CATEGORY_CHANGE,
  payload: categoryChange,
});

export const handleFilterChange = (filterChange) => ({
  type: SHOP_ACTION_TYPES.HANDLE_FILTER_CHANGE,
  payload: filterChange,
});
