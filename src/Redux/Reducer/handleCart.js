const cart = [];

const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default handleCart;
