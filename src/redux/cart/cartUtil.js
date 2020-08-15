export const AddItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItems, quantity: cartItem.quantity + 1 }
        : { ...cartItems }
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
