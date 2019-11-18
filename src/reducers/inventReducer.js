

const inventReducer = (
  state = {
    seeds: {
      arenaria: 0,
      celandine: 0,
      ranogrin: 0,
      wolfsbane: 0
    },
    coins: 1000
  },  action) => {
switch (action.type) {
  case 'BUY':
    state.seeds[action.data.seeds] += 1;
    state.coins -= action.data.price;
    return state;
  case 'PLANT_SEED': 
    state.seeds[action.data] -= 1;
    return state;
  case 'SELL_COINS_PART':
    state.coins += action.data;
    return state;
  default:
    return state;
}
};

export default inventReducer;