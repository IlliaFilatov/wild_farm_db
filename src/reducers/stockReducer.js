const stockReducer = (
  state = {
    arenaria: 0,
    celandine: 0,
    ranogrin: 0,
    wolfsbane: 0
  },  action) => {
  switch (action.type) {
    case 'SELL_HERB_PART':
      state[action.data] -= 1;
      return state;
    case 'HERB_HAS_GROWN':
      state[action.data] += 1;
      return state;
    default:
      return state;
  }
};

export default stockReducer;